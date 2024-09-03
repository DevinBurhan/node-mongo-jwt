const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');


const Schema = mongoose.Schema

const GameSchema = new Schema(
    {
        organizer: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        players: [
            {
                type: Schema.Types.ObjectId,
                ref: "Users",
            }
        ],
        title:{
            type:String,
            required:false,
            default:""
        },
        description:{
            type:String,
            required:true,
            default:""
        },
        date:{
            type:String,
            required: false,
            default: ""
        },
        time:{
            type: String,
            required: false,
            default: ""
        },
        date_time:{
            type:Date,
            default:Date.now,
            required:false
        },
        
    },

    {timestamp: { createdAt: "created_at" , updatedAt: "updated_at"} }

);

GameSchema.plugin(softDelete);

const Games = mongoose.model("Games",GameSchema);

module.exports = Games;