const Service = require("./games.services");
const { commonResponse } = require("../../helper");

module.exports = {

    /*/
    * create new Game
    */

   create: async(req,res,next) => {
         try {
             if(req.body.date && req.body.date != '' && req.body.time && req.body.time != ''){
                 req.body.date_time = new Date(req.body.date + 'T' + req.body.time+'Z');
             }
             let data = await Service.create(req.body);
             if(data){
                return commonResponse.success(res, "GAME_CREATE", 200, data, 'Success' );
             }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
             }
         } catch (error) {
            console.log("Create Game -> " , error);
            return error;
         }
    },
       
    /*
    *  list Game By Id
    */
   
    list: async (req, res, next) => {
        try {
            let query = {};
            let list = await Service.list(query);
            if(list.length > 0){
                return commonResponse.success(res, "GAMES_LIST", 200, list, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("List Games -> ", error);
            return next(error);
        }  
    },


    /*
    *  Get Game By Id
    */

    getById: async (req, res, next) => {
        try {
            let data = await Service.getById(req.params.id);
            if(data){
                return commonResponse.success(res, "GAMES_DETAILS", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Game Details -> ", error);
            return next(error);
        }
    },

    /*
    *  Get Game By Id
    */

    get: async (req, res, next) => {
        try {
            let data = await Service.get();
            if(data){
                return commonResponse.success(res, "GAMES_DETAILS", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Game Details -> ", error);
            return next(error);
        }
    },

    /*
    *  Update Game Data
    */

    update: async (req, res, next) => {
        try {
            if(req.body.date && req.body.date != '' && req.body.time && req.body.time != ''){
                req.body.date_time = new Date(req.body.date + 'T' + req.body.time+'Z');
            }
            let data = await Service.update(req.params.id, req.body);
            if(data){
                return commonResponse.success(res, "GAMES_UPDATE", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Update Game -> ", error);
            return next(error);
        }
    },
    
    /*
    *  Delete Game
    */

    delete: async (req, res, next) => {
        try {
            let data = await Service.delete(req.params.id);
            if(data){
                return commonResponse.success(res, "GAMES_DELETE", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Delete Game -> ", error);
            return next(error);
        }
    },
    
}