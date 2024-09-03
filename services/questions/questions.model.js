const mongoose = require('mongoose');
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema

const questionsSchema = new Schema(
    {
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
        ans: {
            type: String,
            required: false,
            default: ""
        },   

    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);


questionsSchema.plugin(softDelete)

const Questions = mongoose.model("questions" , questionsSchema)


module.exports = Questions;