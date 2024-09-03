const Model = require('./players.model');
const { commonResponse } = require("../../helper");


/*  
 * Chek Condition 
*/

exports.is_exist = async () => {
    try {
        let user = await Model.findOne({}).lean();
        if (!user) {
          return false;
        }
        return user;
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
};
/*
* Create  
*/

exports.create= async(reqBody) => {
    try {
        return await Model(reqBody).save();
    } catch (error) {
        console.log("Error :" , error);
        return error;
    }
}


/*
 * List 
*/

exports.list = async(query) => {
    try {
        return await Model.find(query).sort({ created_at : -1 }).lean();
    } catch (error) {
        console.log("Error :" , error);
        return error;
    }
}


/*
 * Get By Id 
*/

exports.get = async(id) => {
    try {
        return await Model.findById(id).lean();
    } catch (error) {
        console.log("Error : ", error);
        return error;
    }
}


/*
 * Update  
*/

exports.update = async(id,reqBody) => {
    try {
        return await Model.findByIdAndUpdate({_id:id} , {$set:reqBody} , {new:true}).lean();
    } catch (error) {
        console.log("Error :",error);
        return error;
    }
}


/*
 * Delete 
*/

exports.delete = async(id) => {
    try {
        return await Model.findByIdAndDelete(id).lean()
    } catch (error) {
        console.log("Error : ", error);
        return error;
    }
}