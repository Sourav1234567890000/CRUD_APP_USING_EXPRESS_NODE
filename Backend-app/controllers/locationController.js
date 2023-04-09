//  what we are going to do is whenever we create api methods we always need to give some labels to that

const asyncHandler = require("express-async-handler")
const Location = require('../models/contactModel');


// @route get /api/locations/

const getLocations  = asyncHandler( async (req,res) => {
    console.log(req.body)
    console.log("location fetchinf from backend succesfully")
    const location = await Location.find()
    res.status(200).json(location);
})


// post /api/locations/
const addLocation  = asyncHandler( async (req,res) => {
    console.log("the response is", req.body)
    console.log("hello location is coming on backend ")
    const {name,address,city,state,country} = req.body;
    if(!name || !address || !city || !state || !country) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const location = await Location.create({
        name ,
        address,
        city,
        state,
        country
    })
    res.status(201).json(location);
})





const getLocation  = asyncHandler (async (req,res) => {
    const location  = await Location.findById(req.params.id)
    console.log("fetching sigle location successfully ")
    if (!location){
        console.log("not found")
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(location);
})



const updateLocation  =asyncHandler( async (req,res) => {
    const location = await Location.findById(req.params.id)
    console.log("succesfully update a location from backend")
    if(!location) {
        res.status(404)
        throw new Error("Contact not found")
    }

    const updatedLocation = await Location.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true}
    )
    res.status(200).json(updatedLocation);
})



const deleteLocation  = asyncHandler (async (req,res) => {
    console.log("successfully delete from backend")
    const location = await Location.findById(req.params.id)
    if(!location) {
        res.status(404)
        throw new Error("Contact not found")
    }
    await Location.deleteOne()
    res.status(200).json(location);
})

module.exports = {getLocations,addLocation,getLocation, updateLocation, deleteLocation}