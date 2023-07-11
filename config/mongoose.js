const mongoose = require("mongoose"); // Importing Mongoose

// connecting our databse 
mongoose.connect("mongodb://127.0.0.1:27017/E-commerce-API",{
    useNewUrlParser : true,
    useUnifiedTopology: true,
});

const db = mongoose.connection; // creating connnection

// if there is an error 
db.on("error",  console.error.bind(console, "Error on connecting databse!"));
 
// when database is successfully connected
db.once("open", ()=>{
    console.log("Successfully connected to the MongoDB::Databse::")
});

module.exports = db;