const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema 


const PlayerSchema = new Schema (
    {
        game_id: {
            type: Schema.Types.ObjectId,
            ref: "Games",
        },
        name:{
            type:String,
            required:false,
            default:"",
        },
        email:{
            type:String,
            required:false,
            default:"",
        },
        number:{
            type:Number,
            required:false
        }

},
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);


PlayerSchema.plugin(softDelete);

const Players = mongoose.model("players" , PlayerSchema);

module.exports = Players