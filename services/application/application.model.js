const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
let softDelete = require('mongoosejs-soft-delete');
const {v4 : uuidv4} = require('uuid')


const Schema = mongoose.Schema

const ApplicationSchema = new Schema({

    name:{
        type:String,
    },
    app_key: { type: String,
         default: uuidv4()
    },          
})


const Application = mongoose.model("Application", ApplicationSchema);


module.exports= Application