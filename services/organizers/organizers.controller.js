const { commonResponse } = require('../../helper');
const Services = require('./organizers.services');



module.exports = {

    /*
     * List All Players 
     */

    playerList:async(req,res,next) => {
        try {
            let query = {role:"player"};
            let list = await Services.list(query);
            if(list.length > 0 ){
                return commonResponse.success(res, "PLAYERS_LIST", 200, list, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            } 
        } catch (error) {
            console.log("List Players -> ", error);
            return next(error);
        }
    }
}