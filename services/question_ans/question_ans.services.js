const Model = require('./question_ans.model');
const { commonResponse } = require("../../helper");


/*
 * ADD QUESTION_ANS 
*/

exports.add = async(reqBody) => {
    try {
        return await Model(reqBody).save();
    } catch (error) {
        console.log("Error :", error);
        return new Error(error);
    }
}



/**
 *  list Question_Ans
*/

exports.list = async(query) => {
    try {
      return data =  await Model.find(query).sort({created_at: 1}).lean();
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
};


/**
 * Get Question_Ans By ID
*/


exports.get = async(id) => {
    try {
        return await Model.findById(id).lean();
    } catch (error) {
        console.log("Error : " , error);
        return new Error(error);
    }
}