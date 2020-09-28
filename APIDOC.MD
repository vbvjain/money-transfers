# API Documentation

This document will explain the API, input parameters and responses.


Generic response in case of some error is going to be:

    {
        "success": false,
        "msg": "Something went wrong",
        "errCode": errCode
    }



### Transfer money (in paisa) from source account to dest account

**Description**: This API fetches all the employee.

**Method**: `Post`

**URL**: `/api/transfers`

**Headers**: None

**Input JSON**

    {
        "fromAccountId": 275371,
        "toAccountId": 873194,
        "amount": 1000
    }

**Success Response JSON**:

    {
        "success": true,
        "data":
        [
            {
                "destBal": 7011000,
                "sourceBal": "1989000",
                "timestamp": 1601319715
            }
        ]
    }
**Failure Response JSON**:

    {
        "success": false,
        "data":
            {
                "msg": "Source Account does not exit.",
                "errCode": 455
                "timestamp": 1601319715
            }
    }

