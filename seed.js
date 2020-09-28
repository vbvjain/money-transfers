const AccountModel = require("./models/account");
const UserModel = require("./models/user");
const mongoose = require("mongoose");
const {accountTypes} = require('./constants/enums')
const db = require('./configs/db')

function randomAccountNumber(){
   return Math.floor(Math.random() * 899999 + 100000)

}

async function seed() {
    try {
        await AccountModel.remove({});
        await UserModel.remove({});

        let user1 =  await UserModel.create({email: "test1@email.com"})
        console.log(`Created user ${user1.email}`)
        let user1BasicSaving = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.BASIC_SAVINGS, user: user1._id.toString()})
        console.log(`Created account ${user1BasicSaving.accountId} of type ${user1BasicSaving.type}`)


        let user2 =  await UserModel.create({email: "test2@email.com"})
        console.log(`Created user ${user2.email}`)

        let user2BasicSaving = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.BASIC_SAVINGS, user: user2._id.toString()})
        console.log(`Created account ${user2BasicSaving.accountId} of type ${user2BasicSaving.type}`)
        let user2Saving = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.SAVINGS, user: user2._id.toString()})
        console.log(`Created account ${user2Saving.accountId} of type ${user2Saving.type}`)

        let user3 =  await UserModel.create({email: "test3@email.com"})
        console.log(`Created user ${user3.email}`)
        let user3BasicSaving = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.BASIC_SAVINGS, user: user3._id.toString()})
        console.log(`Created account ${user3BasicSaving.accountId} of type ${user3BasicSaving.type}`)
        let user3Saving = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.SAVINGS, user: user3._id.toString()})
        console.log(`Created account ${user3Saving.accountId} of type ${user3Saving.type}`)
        let user3Current = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.CURRENT, user: user3._id.toString()})
        console.log(`Created account ${user3Current.accountId} of type ${user3Current.type}`)


        let user4 =  await UserModel.create({email: "test4@email.com"})
        console.log(`Created user ${user4.email}`)

        let user4Current = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.CURRENT, user: user4._id.toString()})
        console.log(`Created account ${user4Current.accountId} of type ${user4Current.type}`)
        let user4Saving = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.SAVINGS, user: user4._id.toString()})
        console.log(`Created account ${user4Saving.accountId} of type ${user4Saving.type}`)

        let user5 =  await UserModel.create({email: "test5@email.com"})
        console.log(`Created user ${user5.email}`)

        let user5Current = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.CURRENT, user: user5._id.toString()})
        console.log(`Created account ${user5Current.accountId} of type ${user5Current.type}`)
        let user5Current2 = await  AccountModel.create ({accountId: randomAccountNumber(), balance: 3000000, type: accountTypes.CURRENT, user: user5._id.toString()})
        console.log(`Created account ${user5Current2.accountId} of type ${user5Current2.type}`)
    } catch (e) {
        console.log(e)
    }


    await mongoose.disconnect();
    console.info("Sample Data created!");
}

seed().then().catch()
