const { commonResponse } = require("../../helper");
const Model = require('./questions.model');


exports.create = async(reqBody) => {
    try {
        return await Model(reqBody).save();
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
},


exports.list = async(query) => {
    try {
        return await Model.find(query).sort({ created_at : -1 }).lean();
    } catch (error) {
        console.log("Error", error);
        return error;
    }
},

exports.getById = async(id) => {
    try {
        return await Model.findById(id).lean()
    } catch (error) {
        console.log("Error",error);
        return error;
    }
},

exports.update =async(id,reqBody) => {
    try {
        return await Model.findByIdAndUpdate({_id:id} ,{$set:reqBody}, {new:true}).lean();
    } catch (error) {
        console.log("Error", error);
        return error ;
    }
},

exports.delete =async(id) => {
    try {
    return await Model.findByIdAndDelete({_id:id})       
    } catch (error) {
        console.log("Error",error);
        return error;
    }
}