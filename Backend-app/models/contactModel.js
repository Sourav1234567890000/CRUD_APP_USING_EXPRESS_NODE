
const mongoose = require("mongoose")


const contactSchema = mongoose.Schema({
    name : {
        type: String,
        required : [true, "please add the contact name"]
     }, 
    age : {
       type : String,
       required : [true, "please add the age"]
    },
     email : {
        type : String,
        required : [true, "Please add Contact email address"]
     },
     Phone : {
        type : String,  
        required : [true, "please add phone number"]
     },
     location : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Location',
     },
},{
    timestamps : true,
})




module.exports = mongoose.model("Contact", contactSchema)