const mongoose = require("mongoose"); // Importing Mongoose

// connecting our databse 
mongoose.connect("mongodb+srv://aagm0404:Simraj0404@cluster0.aorlgqo.mongodb.net/?retryWrites=true&w=majority")


const db = mongoose.connection; // creating connnection

// if there is an error 
db.on("error",  console.error.bind(console, "Error on connecting databse!"));
 
// when database is successfully connected
db.once("open", ()=>{
    console.log("Successfully connected to the MongoDB::Databse::")
});

module.exports = db;