
const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors")



connectDb();
const app = express();

const port = process.env.PORT ||  5000;

app.use(cors());

// app.use is working as middleware

app.use(express.json());    
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)
// for location
app.use("/api/locations",require("./routes/locationRoutes"))

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})