const { commonResponse } = require('../../helper');
const PropertyModel = require('./property.model');
const UsersModel = require('../users/users.model')
const otpGenerator = require('otp-generator');



/*
 * ADD Property 
*/

exports.add = async(reqBody) => {
    try {
        reqBody.location = {
            type: "Point",
            coordinates: [reqBody.long, reqBody.lat],
        }
        return await PropertyModel(reqBody).save();
    } catch (error) {
        console.log("Error :", error);
        return new Error(error);
    }
}



/**
 *  list Property
*/

exports.FindByAddress = async(reqBody) => {
    try {
      return  await PropertyModel.find({ address: reqBody.address })
      .populate({
        path:'user_id',
        select:"first_name last_name email"}).select("-created_at -Updated_at -__v")
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
};



/**
 *  Search By Name Property
*/

exports.SearchByName = async(add_tenant_name) => {
    try {
      return await PropertyModel.find({ add_tenant_name: {$regex: add_tenant_name, $options: "i"}})
    } catch (error) {
        console.log("Error : ", error);
        return new Error(error);
    }
};


/**
 * Search Property Lat Long Query 
*/

exports.findQuery = async(long,lat) => {
    try {
        return await PropertyModel.find({
            location: {
              $nearSphere: { $geometry: 
                { type: 'Point',
                coordinates: [long, lat]},
                $maxDistance: 1000 },
            }
          });
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}

/**
 *  list Property
*/

exports.list = async() => {
    try {
        return await PropertyModel.aggregate([ 
                {  
                    $match: { }
                   },
                   {
                    $lookup: {
                        from: 'users',
                        localField: "user_id",
                        foreignField: "_id",
                        as: 'user_id'
                    }
                },
                    { "$unwind": "$user_id"},
                    { "$project": {
                        _id:1,
                        location:1,
                        property_image:1,
                        property_type:1,
                        current_rate:1,
                        numbers_of_bedrooms:1,
                        number_of_bathrooms:1,
                        by_furnishing:1,
                        add_tenant_name:1,
                        address:1,
                        description:1,
                        "_id":"$user_id._id",
                        "first_name":"$user_id.first_name",
                        "last_name":"$user_id.last_name",
                        "email": "$user_id.email",
                      }}
             ])
        // .aggregate([ { $match: {} }, { $group:
        //     { _id : '$user_id', sum : { $sum: "$current_rate" } }
        //   }])
        
           
        
        // .find(query).lean()
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}

/**
 * Get Property By Id
*/


exports.get = async(id) => {
    try {
        return await PropertyModel.findById(id).lean();
    } catch (error) {
        console.log("Error : " , error);
        return new Error(error);
    }
}



/* 
* Update Property By Id
*/
exports.update = async(id,reqBody) => {

    try {
        return await PropertyModel.findByIdAndUpdate({ _id: id }, {$set:reqBody}, {new: true,}).lean();
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}



/* 
* Delete Property By Id
*/
exports.delete = async(id) => {

    try {
        return await PropertyModel.findByIdAndDelete({ _id: id });
    } catch (error) {
        console.log("Error :" , error);
        return new Error(error);
    }
}