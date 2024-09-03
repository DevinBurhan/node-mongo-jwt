const { commonResponse } = require("../../helper")
const { usersModel } = require('../users');

/*
* List
*/

exports.list = async(query) => {
    try {
        return await usersModel.find(query).sort({ created_at : -1}).lean();
    }catch(error){
        console.log("Error : ", error);
        return new Error(error);
    }
}