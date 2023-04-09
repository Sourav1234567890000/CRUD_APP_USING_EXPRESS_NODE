
const mongoose = require("mongoose")


const locationSchema = mongoose.Schema({
    name : {
        type: String,
        required : [true, "please add the contact name"]
     }, 
    address : {
       type : String,
       required : [true, "please add the address"]
    },
     city : {
        type : String,
        required : [true, "Please add City"]
     },
     state : {
        type : String,  
        required : [true, "add state"]
     },
     country : {
        type : String,  
        required : [true, "add country"]
     },
},{
   timestamps : true,
})




module.exports = mongoose.model("Location", locationSchema)