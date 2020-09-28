const TransactionModel = require('../models/transaction')
const AccountModel = require('../models/account')
const errors = require('../constants/errors')
const {accountTypes,MAX_BASIC_SAVING_LIMIT} = require('../constants/enums')
const mongoose = require('mongoose')


const transferService = async (data) => {
    //Checking the account ids got in the request. If present, extracting the account object from the database, else
    //throwing error.
    let fromAccount = await getAccount(data.fromAccountId)
    if (!fromAccount) throw new Error(errors.SRC_ACCOUNT_NOT_EXIST.key)
    let toAccount = await getAccount(data.toAccountId)
    if (!toAccount) throw new Error(errors.DEST_ACCOUNT_NOT_EXIST.key)

    //checking if the accounts belong to the same user
    await sameUserAccount(fromAccount, toAccount)

    //checking if the source account has the requested balance
    await sourceAccountBalanceCheck(fromAccount, data.amount)

    //Checking the condition on basic savings - The balance should not exceed more than 50000
    await destAccountBasingSavingsCheck(toAccount, data.amount)

    //Starting the session for the transaction
    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        toAccount = await AccountModel.findOneAndUpdate({accountId: toAccount.accountId}, {$inc: {balance: data.amount}}, {
            session: session,
            new: true
        })
        fromAccount = await AccountModel.findOneAndUpdate({accountId: fromAccount.accountId}, {$inc: {balance: data.amount * -1}}, {
            session: session,
            new: true
        })
        let transaction = await TransactionModel.create([{
            fromAccountId: data.fromAccountId,
            toAccountId: data.toAccountId,
            amount: data.amount
        }], {session: session})
        await session.commitTransaction()
        const aggregate = await AccountModel.aggregate([
            {
                $match: {
                    user: toAccount.user
                }
            }, {
                $group: {
                    _id: "$user",
                    total: {
                        $sum: "$balance"
                    }
                }
            }
        ]);
        const destBal = aggregate[0].total;
        const sourceBal = fromAccount.balance

        return {destBal, sourceBal, timestamp: toTimestamp(transaction[0].timestamp.toString())}
    } catch (e) {
        session.abortTransaction()
        throw new Error(errors.GEN_ERR.key)
    } finally {
        session.endSession();
    }
}

function toTimestamp(strDate) {
    var datum = Date.parse(strDate);
    return datum / 1000;
}

const getAccount = async (accountId) => {
    const exists = await AccountModel.findOne({accountId: accountId.toString()})
    return exists
}

const sourceAccountBalanceCheck = async (sourceAccount, amount) => {
    if (sourceAccount.balance < amount) throw new Error(errors.SOURCE_INSUFFICIENT_BAL.key)
}

const destAccountBasingSavingsCheck = async (toAccount, amount) => {
    if (toAccount.type === accountTypes.BASIC_SAVINGS && toAccount.balance + amount > MAX_BASIC_SAVING_LIMIT) {
        throw new Error(errors.DEST_ACCOUNT_BALANCE_EXCEED.key)
    }
}


const sameUserAccount = async (fromAccount, toAccount) => {
    if (fromAccount.user.toString() === toAccount.user.toString()) throw new Error(errors.SOURCE_DEST_SAME_USER.key)
}

module.exports = {transferService: transferService}