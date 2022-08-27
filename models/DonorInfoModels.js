const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
    donorname: {
        type:String,
        required:true
    },
    donoremail: {
        type:String,
        required:true
    },
    donorcontact: {
        type:String,
        required:true
    },
    donorcity: {
        type:String,
        required:true
    },
    donorstate: {
        type:String,
        required:true
    },
    donorpin: {
        type:String,
        required:true
    },
    donorage: {
        type:String,
        required:true
    },
    donorgender: {
        type:String,
        required:true
    },
    donorbloodgroup: {
        type:String,
        required:true
    },
    date: {
        type: Date,
        default:Date.now
    }
})

module.exports = mongoose.model('mytable', donorSchema)