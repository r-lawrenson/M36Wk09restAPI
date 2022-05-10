// require dotenv to use .env file for connection string
require("dotenv").config();
// declare mongoose to use mongoose library
const mongoose = require("mongoose");
// declare connection and use async to await a response
const connection = async () => {
    try {
        // use await and try to connect to datasase
        await mongoose.connect(process.env.MONGO_URI);
        // log a message when connected
        console.log("Succesfully connected");
    } catch (error) {
        // else log an error message
        console.log(error)
    }
}

connection();