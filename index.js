const express = require("express");  // Importing Express
const app = express();
const port = 1200; // Creating Port
const db = require("./config/mongoose") // Importing Mongoose


app.use(express.urlencoded({extended:true}));



// setting up our routes
app.use("/", require("./routes/index"));


// Starting the server
app.listen(port, (err)=>{
    // If there is an error then throwing error
    if(err){
        console.log(`Error : ${err}`)
    }

    // If server started succesfully
    console.log(`The server is up and running at port : ${port}`);

});