//  what we are going to do is whenever we create api methods we always need to give some labels to that

const asyncHandler = require("express-async-handler")
const Contact = require('../models/contactModel');
const { response } = require("express");
//wrap all with the asynchandler what is this for it catch the error and throw them into the errorhandler 

// @desc Get all contacts
// @route GET /api/contacts
// @access public 

const getContacts  = asyncHandler( async (req,res) => {
    console.log(req.body)
    console.log("data fetchinf from backend succesfully")
    const contacts = await Contact.find()
    res.status(200).json(contacts);
})

// @desc Create New contact
// @route POST /api/contacts
// @access public 

const createContact  = asyncHandler( async (req,res) => {
    console.log("the response is", req.body)
    console.log("hello data is coming on backend ")
    const {name,age,email,Phone} = req.body;
    if(!name || !age || !email || !Phone) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name ,
        age,
        email,
        Phone
    })
    res.status(201).json(contact);
})



// @desc  GET Single contact
// @route get /api/contacts/:id
// @access public 

const getContact  = asyncHandler (async (req,res) => {
    const contact  = await Contact.findById(req.params.id)
    console.log("fetching sigle contact successfully ")
    if (!contact){
        console.log("not found")
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})


// @desc Update contact
// @route PUT /api/contacts/:id
// @access public 

const updateContact  =asyncHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    console.log("succesfully update a user from backend")
    if(!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true}
    )
    res.status(200).json(updatedContact);
})


// @desc delete contact
// @route DELETE /api/contacts/:id
// @access public 

const deleteContact  = asyncHandler (async (req,res) => {
    console.log("successfully delete from backend")
    const contact = await Contact.findById(req.params.id)
    if(!contact) {
        res.status(404)
        throw new Error("Contact not found")
    }
    await Contact.deleteOne()
    res.status(200).json(contact);
})

module.exports = {getContacts,createContact,getContact, updateContact, deleteContact}