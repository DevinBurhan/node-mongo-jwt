const Service = require('./rooms.services');
const { commonResponse } = require("../../helper");



module.exports = {

/*
    * Create   
    */
create:async(req,res,next) => {
    try {
 
        let data  = await Service.createOne(req.body);
        if(data){
            return commonResponse.success(res, "GAMES_QUESTION_CREATE", 200, data, 'Success');
        }else{
            return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
        }
    } catch (error) {
        console.log("Create Game Question-> ", error);
        return next(error);
    }
},
    /* 
     * List Rooms  
    */

list:async(req,res,next) => {
    try {
        let query = {};
        let data = await Service.list(query);
        if(data){
           return commonResponse.success(res, "ROOM_LIST", 200, data, 'Success' );
        }else{
           return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
        }
    } catch (error) {
        console.log("LIST ROOMS -> " , error);
        return error;
    }
},
}
