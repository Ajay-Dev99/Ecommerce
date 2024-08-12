const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String
    }
})

module.exports = new mongoose.model('admin',adminSchema)