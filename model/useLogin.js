const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
        },
        phoneNo : {
            type : Number,
            require : true,
        },
        otp : {
            tpye : Number,
            require : true,
        }
    }
)

module.exports = mongoose.Schema("UserOtpLogin",userLoginSchema);