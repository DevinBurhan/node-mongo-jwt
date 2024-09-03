const Service = require('./gameQuestions.services');
const { commonResponse } = require("../../helper");


module.exports = {


    /*
    * Create Question 
    */
    create:async(req,res,next) => {
        try {
            let data = await Service.create(req.body);
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
    *List Question
    */

    list:async(req,res,next) => {

        try {
            let query = {};
            let list = await Service.list(query);
            if(list.length > 0){
                return commonResponse.success(res, "GAMES_QUES   TION_LIST", 200, list, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("List Game  Questions -> ", error);
            return next(error);
        }
    },

    /*
    * Get By Id 
    */
    
    get:async(req,res,next) =>{
        try {
            let data = await Service.get(req.params.id);
            if(data){
                return commonResponse.success(res, "GAMES_QUESTION_DETAILS", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Game Question Details -> ", error);
            return next(error);
        }
    },

    /*
    * Update Question
    */

    update:async(req,res,next) =>{
        try {
            let update = await Service.update(req.params.id,req.body);
            if(update){
                return commonResponse.success(res, "GAMES_QUESTION_UPDATE", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Update Game Question -> ", error);
            return next(error);
        }
    },

    /*
    * Delete Question
    */
    delete: async(req,res,next) => {
        try {
            let data = await Service.delete(req.params.id);
            if(data){
                return commonResponse.success(res, "GAMES_QUESTION_UPDATE", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Delete Game Question -> ", error);
            return next(error);
        }
    }
}