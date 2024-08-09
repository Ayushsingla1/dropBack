const mongoose = require('mongoose')

// ye wala schema ki jarurat nhi hain, delete mar dena

const Malls = new mongoose.Schema({
    mallName : {
        type : String,
        require : true,
    },
    mallEmail : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    mallId : {
        type : Number,
        reqiure : true,
    },
    restaurants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurants"
        }
    ],
})

module.exports = mongoose.model('Malls',Mall);