module.exports = {
    SRC_ACCOUNT_NOT_EXIST:{key:"SRC_ACCOUNT_NOT_EXIST", msg:"Source Account does not exit.",errCode:455,statusCode:404},
    DEST_ACCOUNT_NOT_EXIST:{key:"DEST_ACCOUNT_NOT_EXIST",msg:"Destination Account does not exit.",errCode: 467,statusCode:404},
    SOURCE_DEST_SAME_USER:{key:"SOURCE_DEST_SAME_USER",msg:"Source and destination accounts should be of different users.",errCode: 499,statusCode:400},
    SOURCE_INSUFFICIENT_BAL:{key:"SOURCE_INSUFFICIENT_BAL",msg:"Source Account does not have sufficient balance.",errCode: 678,statusCode:400},
    DEST_ACCOUNT_BALANCE_EXCEED:{key:"DEST_ACCOUNT_BALANCE_EXCEED",msg:"Simple saving Account balance cannot be more than Rs. 50000.",errCode: 211,statusCode:400},
    TRANSFER_INVALID_SRC_ACCOUNT_ID:{key:"TRANSFER_INVALID_SRC_ACCOUNT_ID",msg:"fromAccountId Field is not valid",errCode: 987,statusCode:400},
    TRANSFER_INVALID_DEST_ACCOUNT_ID:{key:"TRANSFER_INVALID_DEST_ACCOUNT_ID",msg:"toAccountId Field is not valid",errCode: 988,statusCode:400},
    TRANSFER_INVALID_AMOUNT:{key:"TRANSFER_INVALID_AMOUNT",msg:"Amount Field is not valid",errCode: 989,statusCode:400},
    GEN_ERR:{key:"GEN_ERR",msg:"Something went wrong.",errCode: 111,statusCode:500}
}