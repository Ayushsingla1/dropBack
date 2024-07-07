const mongoose = require('mongoose')

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
    mallKey : {
        type : Number,
        reqiure : true,
    }
})

module.exports = mongoose.model('mallOwner',mallOwnerSchema);