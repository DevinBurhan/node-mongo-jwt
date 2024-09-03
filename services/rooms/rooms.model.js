const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema;

const roomsSchema = new Schema(
    {  
        game_id: {
            type: Schema.Types.ObjectId,
            ref: "Games",
        },
        players: [
            {
                type: Schema.Types.ObjectId,
                ref: "players",
            } 
        ],
        status: {
            type: String,
            enum: ['pending', 'ready_to_start', 'running', 'completed'],
            default: "pending"
        },
        start_time: {
            type: Date,
        },
        end_time: {
            type: Date,
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
  );
  
  roomsSchema.plugin(softDelete);
  
  const Rooms = mongoose.model("rooms", roomsSchema);
  
  module.exports = Rooms;