const mongoose = require('mongoose')
require('dotenv').config();
const url = process.env.MONGODB_URL
const db = ()=>{
    mongoose.connect(url,{
    })
    .then(()=>console.log("Connected with db successfully"))
    .catch(err=>{
        console.log(err)
        process.exit(1);
    })
}
module.exports = db;