const mongoose = require('mongoose');
const dishes = new mongoose.Schema(
    {
        item : {
            type : String,
            require : true,
        },
        description : {
            type : String,
            require : true,
        },
        price : {
            type : Number,
            require : true,
        },
        category : {
            type : Boolean,
            require : true,
        },
        image : {
            type : String,
            require : true,
        },
        restroId : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "restaurants"
        },
        mallId : {
            type : mongoose.Schema.Types.ObjectId,
            ref: "malls"
        },
    }
)
module.exports = mongoose.model('dishes',dishes);