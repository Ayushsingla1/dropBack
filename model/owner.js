const mongoose = require('mongoose')

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