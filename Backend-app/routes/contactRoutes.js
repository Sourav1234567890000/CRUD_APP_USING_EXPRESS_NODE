const express = require("express")
const router  = express.Router(); 
const {getContacts,createContact,getContact, updateContact, deleteContact} = require("../controllers/contactController")


// get all contact
router.route('/all').get(getContacts)

// add contacts
router.route('/add').post(createContact)

// get individual contact
router.route('/:id').get(getContact)

// update contact
router.route('/:id').put(updateContact)

// delete contact
router.route('/:id').delete(deleteContact)

module.exports = router;

// Now we have all our routes and now we are going to create the controller 
// so that controller is going to contain all our logic for the reequest reponse and is going to connect with our database