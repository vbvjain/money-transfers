const express = require("express");
const Joi = require('joi');
const {transferService} = require('../services/transfers');
const router = express.Router();
const errors = require('../constants/errors')
const success_msgs = require('../constants/success_msgs')

router.post('/', async (req, res) => {
    try {
        let rv = validateTransfer(req.body)
        if (rv.error) {
            throw new Error(rv.error.message)
        }
        rv = await transferService(req.body)
        return res.send({success: true, data: rv, msg: success_msgs.TRANSFER_SUCCESS})
    } catch (e) {
        if (e.message in errors) {
            return res.status(errors[e.message].statusCode).send({success: false, msg: errors[e.message].msg, errCode: errors[e.message].errCode})
        }
        return res.status(errors.GEN_ERR.statusCode).send({success: false, msg: errors.GEN_ERR.msg, errCode: errors.GEN_ERR.errCode})
    }
})

function validateTransfer(transfer) {
    const schema = Joi.object({
        fromAccountId: Joi.number().required().error(new Error(errors.TRANSFER_INVALID_SRC_ACCOUNT_ID.key)),
        toAccountId: Joi.number().required().error(new Error(errors.TRANSFER_INVALID_DEST_ACCOUNT_ID.key)),
        amount: Joi.number().positive().required().error(new Error(errors.TRANSFER_INVALID_AMOUNT.key))
    });

    return schema.validate(transfer)
}


module.exports = router