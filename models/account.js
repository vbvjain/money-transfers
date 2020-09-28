const mongoose = require("mongoose");
const {accountTypes} = require('../constants/enums')
let accountSchema = new mongoose.Schema({
    accountId: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: [accountTypes.SAVINGS, accountTypes.CURRENT , accountTypes.BASIC_SAVINGS],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});
const AccountModel = mongoose.model(
    "Account",
    accountSchema
);

module.exports = AccountModel;