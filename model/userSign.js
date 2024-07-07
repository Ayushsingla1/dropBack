const mongoose = require('mongoose');

const userSignSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
        },
        email : {
            type : String,
            require : true,
        },
        password : {
            tpye : String,
            require : true,
        },
        cpassword : { 
            type : String,
            require : true,
        }
    }
)

module.exports = mongoose.model("userSign",userSignSchema);