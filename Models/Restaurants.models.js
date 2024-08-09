const mongoose = require('mongoose')


const Restaurants = new mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        tyoe: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    dishes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "dishes"
        }
    ]
})

module.exports = mongoose.model("Restaurants", Restaurants)