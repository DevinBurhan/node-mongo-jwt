const Service = require('./property.services');
const { commonResponse } = require("../../helper");
const fs = require('fs');
const sharp = require('sharp');
const path = require("path");
// const csv = require('fast-csv');

module.exports = {


    /*
    * Create Property
    */
    create:async(req,res,next) => {
        try {
            req.body.user_id = req.user.id;
            let imageData = [];
            if (req.files != undefined && req.files.property_image!= undefined) {
                for(let objectData of req.files.property_image ){    
                    imageData.push(process.env.DOMAIN_URL + "/property-images/" + objectData.filename) ;
                }
                req.body.property_image = imageData;
            }
            let data = await Service.add(req.body);
            if(data){
                return commonResponse.success(res, "PROPERTY_CREATE", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Create Property-> ", error);
            return next(error);
        }
    },



    /** 
     * Convert Images
    */
    convert:async(req,res,next) => {
        try {  
            const path = (
                __dirname,
                "..",
                "././public/property-images/"
            );

            const profileBuffer =   path + req.files.property_image[0].filename
            const data = await sharp(profileBuffer)
            .resize(845,400)
            .jpeg({quality: 50})
            .toFile('././public/property-images/newImage.jpg')

            /** 
             * convert json to csv file 
            */
            // var data = fs.createWriteStream( "././public/property-images/data.csv");
            //         csv.write(list,{headers:true})
            //         .on("Finish",function(){
            //             result.send("Send");
            //         })
            //         .pipe(data);
            if(data){
                return commonResponse.success(res, "PROPERTY_CREATE", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Create Property-> ", error);
            return next(error);
        }
    },

    
    /*
    *List All Property
    */

    List:async(req,res,next) => {
        try {
            if(req.query.long && req.query.lat !== undefined){
            let list = await Service.findQuery(req.query.long,req.query.lat);
            if(list.length > 0){
                return commonResponse.success(res, "PROPERTY_LIST_OF_QUERY_LAT_LONG", 200, list, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        }
        else{
            let query = {};
            let list = await Service.list();
            if(list.length > 0){
                return commonResponse.success(res, "PROPERTY_LIST", 200, list, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        }
        } catch (error) {
            console.log("List Property -> ", error);
            return next(error);
        }
    },


    /*
    *Find By Property Address
    */

    findByAddress:async(req,res,next) => {

        try {
            // let query = {};
            let list = await Service.FindByAddress(req.body);
            if(list.length > 0){
                return commonResponse.success(res, "PROPERTY_LIST_BY_ADDRESS", 200, list, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("List Property -> ", error);
            return next(error);
        }
    },

    /*
    *Find By Property Address
    */

    Search:async(req,res,next) => {

        try {
            let list = await Service.SearchByName(req.params.add_tenant_name);
            if(list.length > 0){
                return commonResponse.success(res, "PROPERTY_SEARCH_BY_TENANT_NAME", 200, list, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Search Tenant Name -> ", error);
            return next(error);
        }
    },



    /*
    * Get Property By Id 
    */
    
    get:async(req,res,next) =>{
        try {
            let data = await Service.get(req.params.id);
            if(data){
                return commonResponse.success(res, "PROPERTY_DETAILS", 200, data, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Property Details -> ", error);
            return next(error);
        }
    },

    /*
    * Update Property By Id
    */

    update:async(req,res,next) =>{
        try {
            let update = await Service.update(req.params.id,req.body);
            if(update){
                return commonResponse.success(res, "PROPERTY_UPDATE", 200, update, 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Update Property -> ", error);
            return next(error);
        }
    },


    /*
    * Delete Property By Id
    */

    Delete:async(req,res,next) =>{
        try {
            let data = await Service.delete(req.params.id);
            if(data){
                return commonResponse.success(res, "PROPERTY_DELETE", 200, data , 'Success');
            }else{
                return commonResponse.customResponse(res, "SERVER_ERROR", 400, {}, 'Something went wrong, Please try again');
            }
        } catch (error) {
            console.log("Delete Property -> ", error);
            return next(error);
        }
    }
}