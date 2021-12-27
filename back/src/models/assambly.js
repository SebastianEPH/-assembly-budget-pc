const mongoose = require('mongoose')
//const stream = require("stream");

const {Schema} =  mongoose

const Assembly= new Schema({
    nameProject: {type:String , required:  true },
    description: {type: String , required: true}
})

module.exports = mongoose.model('taks', Assembly);









