const ApplicationModel = require('./application.model');
const { commonResponse } = require('../../helper');




/*
 * ADD APPLICATION
*/

exports.add = async(reqBody) => {
    try {
        return await ApplicationModel(reqBody).save();
    } catch (error) {
        console.log("Error :", error);
        return new Error(error);
    }
}



/*
 * FIND APP_KEY
*/

exports.key = async(app_key) => {
    try {
        return await ApplicationModel.findOne({app_key:app_key}).lean();
    } catch (error) {
        console.log("Error :", error);
        return new Error(error);
    }
}