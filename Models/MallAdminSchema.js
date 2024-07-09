const mongoose = require('mongoose')

// ye wala schema ki jarurat nhi hain, delete mar dena

const mallOwnerSchema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model('mallOwner',mallOwnerSchema);