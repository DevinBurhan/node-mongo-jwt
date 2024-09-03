const Service = require('./questions.services');
const { commonResponse } = require("../../helper");

module.exports = { 


    /* 
    * Create Question 
    */
    create:async(req,res,next) =>{
        try {
            let data = await Service.create(req.body);
            if(data){
                return commonResponse.success(res, "QUESTIONS_CREATE", 200, data, 'Success' );
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("create Question",error)
            return error;
        };


    },

    /* 
    * list Question
    */
    list:async(req,res,next) =>{
        try {
            let query = {}
            let data = await Service.list(query);
            if(data){
                return commonResponse.success(res, "QUESTIONS_LIST", 200, data, 'Success' );
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("List Questions",error)
            return error;
        }
    },


    /** 
    *Get Question By Id 
    */

    get:async(req,res,next) =>{
        try {
            let data = await Service.getById(req.params.id);
            if(data){
                return commonResponse.success(res, "QUESTIONS_GET", 200, data, 'Success' );
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {   
            console.log("Get Questions",error)
            return error;
        }
    },
           
    /** 
    *Update Question By Id 
    */

    update:async(req,res,next) =>{
        try {
            let data = await Service.update(req.params.id,req.body);
            if(data){
                return commonResponse.success(res, "Questions_UPDATE", 200, data, 'Success' );
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("Update Questions",error)
            return error;
        }
    },
    /** 
    *Delete Question By Id 
    */

    delete:async(req,res,next) =>{
        try {
            let data = await Service.delete(req.params.id);
            if(data){
                return commonResponse.success(res, "GAME_DELETE", 200, data, 'Success' );
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {} , 'Something went wrong, Please try again' )
            }
        } catch (error) {
            console.log("Delete Question",error)
            return error;
        }
    },

}