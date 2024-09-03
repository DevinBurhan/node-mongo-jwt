const Model = require('./rooms.model');
const { commonResponse } = require("../../helper");


/* 
 * Chek Condition 
*/

exports.is_exist = async (game_id) => {
    try {
       return await Model.findOne({game_id: game_id}).sort({ created_at : -1 }).lean();
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
};

/* 
* Create  
*/

exports.create = async(roomData) => {
    try {
        return await Model({roomData:roomData}).save();
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
}

/* 
* Create  
*/

exports.createOne = async(reqBody) => {
    try {
        return await Model(reqBody).save();
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
}



/**
 * Push Player
*/


exports.pushPlayer = async(player_id,room_id) => {
    try{
        return await Model.findOneAndUpdate({player_id,room_id},
            {push:{
                "players":
                    [{player_id},{room_id}]
            }}
            ).lean();
    }catch (error){
        console.log("Error : ", error);
        return new Error(error);
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
