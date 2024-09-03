const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema;

const PropertySchema = new Schema(
    {
        user_id:{
            type:Schema.Types.ObjectId,
            ref:"Users",
        },
        property_image: {
            type: Array
        },
        location: {
            type: { type: String, default: "Point" },
            coordinates: { type: [Number],
            index: "2dsphere" , 
            default: [0, 0] },
        },
        property_type:{
            type:String,
            enum: ["Apartment","House","Other"],
            default:"Other",
            required:false
        },
        current_rate:{
            type:Number,
            default:0,
            required:false
        },
        numbers_of_bedrooms:{
            type:String,
            enum: ["studio","1","2","3","4+"],
            default:"studio",
            required:false
        },
        number_of_bathrooms:{
            type:String,
            enum: ["any","1","2+"],
            default:"any",
            required:false
        },
        by_furnishing:{
            type:String,
            enum: ["furnished","part_furnished","unfurnished","independent_floor"],
            default:"unfurnished",
            required:false
        },
        add_tenant_name:{
            type:String,
            required:false,
            default:""
        },
        address:{
            type:String,
            required:false,
            default:""
        },
        description:{
            type:String,
            required:false,
            default:""
        },
        is_notification_on: {
            type: Boolean,
            default: true,
        },
        status: {
            type: String,
            enum: ["verified","pending","deactivated"],
            default:"pending",
            required:false,
        },
        
       
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

PropertySchema.plugin(softDelete);

const Property = mongoose.model("Property", PropertySchema);

module.exports = Property;

