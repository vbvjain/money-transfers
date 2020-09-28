const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    fromAccountId: {
        type: String,
        required: true
    },
    toAccountId: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const TransactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = TransactionModel;