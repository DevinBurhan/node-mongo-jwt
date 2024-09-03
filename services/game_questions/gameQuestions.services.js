const Model = require('./gameQuestions.model');
const { commonResponse } = require("../../helper");


/* 
* Create  
*/

exports.create = async(reqBody) => {
    try {
        return await Model(reqBody).save();
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
}

/* 
* List  
*/

exports.list = async(query) => {
    try {
        return await Model.find(query).sort({created_at : -1 }).lean()
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}

/* 
* get  
*/

exports.get = async(id) => {
    try {
        return await Model.findById(id).populate({
            path:'organizer  players',
            select:'name email'}).select("-created_at -updated_at -__v"); 
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}


/* 
* Update  
*/
exports.update = async(id) => {

    try {
        return await Model.findByIdAndUpdate(id)
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}

/* 
* Delete  
*/

exports.delete = async(id) => {

    try {
        return await Model.findByIdAndDelete(id)
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}