const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
        },
        phNo : {
            type: Number,
            require: true,
        },
        //we will be using otp generation for this agar kuch aur rhega tho vo add kardenge
    }
)

module.exports = mongoose.model("Customer",customerSchema);