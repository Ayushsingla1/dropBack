const mongoose = require('mongoose');

const restroOwnerSchema = new mongoose.Schema(
    {
        restroName : {
            type : String,
            require : true,
        },
        restroEmail : {
            type : String,
            require : true,
        },
        password : {
            type : String,
            require : true,
        },
        restroId : {
            type : Number,
            reqiure : true,
        }
    }
)

module.exports = mongoose.model("restroOwner",restroOwnerSchema);