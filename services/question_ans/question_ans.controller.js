const Service = require('./question_ans.services');
const { commonResponse } = require("../../helper");


module.exports = {

    /**
     * Add question_Ans
     */


    add:async(req,res,next) => {
        try {
            let data = await Service.add(req.body);
            if(data){
                return commonResponse.success(res, "QUESTION_ANS_ADD", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Add Question Ans --> : ", error);
            return new Error(error);
        }
    },


    /**
     * list Question_Ans
    */

    list:async(req,res,next) => {
        try {
            let query = {}
            if(req.body.player_id && req.body.player_id != ''){
                query.player_id = req.body.player_id
            }
            if(req.body.gameQuestion_id && req.body.gameQuestion_id != ''){
                query.gameQuestion_id = req.body.gameQuestion_id
            }
            let data = await Service.list(query);
            if(data){
                return commonResponse.success(res, "QUESTION_ANS_LIST", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }         
        } catch (error) {
            console.log("List Question Ans --> : ", error);
            return new Error(error);
        }
    },

    /**
     * Get Question_Ans
    */

    get:async(req,res,next) => {
        try {
            let data = await Service.get(req.params.id);
            if(data){
                return commonResponse.success(res, "QUESTION_ANS_GET", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Get Question Ans --> : ", error);
            return new Error(error);
        }
    }

}
