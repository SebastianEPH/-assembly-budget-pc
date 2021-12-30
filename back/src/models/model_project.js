
const mongoose = require('mongoose')
//const stream = require("stream");

const {Schema} =  mongoose

const Projects= new Schema({
    name: {type:String , required:  true },
    details: {type: String , required: true},
    date: {type: String, required: false},
    img: {type:String , required: false}

})

module.exports = mongoose.model('project', Projects);









