const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');
const Schema = mongoose.Schema


const gameQuestionsSchema = new Schema (
    {
        game_id: {
            type: Schema.Types.ObjectId,
            ref: "Games",
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: "category",
        },
        question_english: {
            type: String,
            required: false,
            default: ""
        },
        options_english: {
            a : String,
            b : String,
            c : String,
            d : String,
        },
        question_hebrew: {
            type: String,
            required: false,
            default: ""
        },
        options_hebrew: {
            a : String,
            b : String,
            c : String,
            d : String,
        },
        question_type: {
            type: String,
            enum: ["yes/no","options"],
            default:"options",
            required:false
        },
        type: {
            type: String,
            enum: ["custom_question","category_question"],
            default:"category_question",
            required:false
        },
        ans: {
            type: String,
            required: false,
            default: ""
        },   

    },
{timestamps : { createdAt : "Created_at" , updatedAt : "Updated_at"}}

);

gameQuestionsSchema.plugin(softDelete);

const GameQuestion = mongoose.model("GameQuestions" , gameQuestionsSchema);


module.exports = GameQuestion