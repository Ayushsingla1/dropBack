const mongoose = require('mongoose');
const foodItemSchema = new mongoose.Schema(
    {
        itemName : {
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
        isVeg : {
            type : Boolean,
            require : true,
        },
        image : {
            type : String,
            require : true,
        },
        restroId : {
            type : Number,
            require : true,
        }
    }
)
module.exports = mongoose.model('FoodItem',foodItemSchema);