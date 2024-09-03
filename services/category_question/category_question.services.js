const { commonResponse } = require("../../helper");
const Model = require('./category_question.model');




exports.create = async(reqBody) => {
    try{
        return await  Model(reqBody).save(); 
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
}

/*
*  List
*/
exports.list = async (query) => {
    try {
        return await Model.find(query).sort( { created_at: -1 } ).lean();
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
};


exports.getById = async (id) => {
    try {
        return await Model.findById(id).populate({
            path:'organizer  players',
            select:'name email'}).select("-created_at -updated_at -__v"); 
    } catch (error) {
        return error;
    }
};

exports.get = async () => {
    try {
        return await Model.find().populate({
            path:'organizer UserData',
            select:'name email'}).select("-created_at -updated_at -__v"); 
    } catch (error) {
        return error;
    }
};
  /*
    *  Update Game Data
    */
  exports.update = async (id, reqBody) => {
    try {
        let update = await Model.findOneAndUpdate({ _id: id }, {$set:reqBody}, {new: true}).lean();
        return update;
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
};

/*
*  Delete Game
*/
exports.delete = async (id) => {
    try {
        return await Model.removeOne({_id:id}); 
    } catch (error) {
        return error;
    }
};

