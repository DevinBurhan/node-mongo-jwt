const Service = require('./application.services');
const { commonResponse } = require("../../helper");


module.exports = {


    /*
    * Create Property
    */
    create:async(req,res,next) => {
        try {
            let data = await Service.add(req.body);
            if(data){
                return commonResponse.success(res, "APPLICATION_CREATE", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Create Application-> ", error);
            return next(error);
        }
    },

}