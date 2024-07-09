const mongoose = require('mongoose')

// ye wala schema ki jarurat nhi hain, delete mar dena

const ownerSchema = new mongoose.Schema({
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    }

})

module.exports = mongoose.model("owner",ownerSchema);