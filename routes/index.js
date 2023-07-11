const express = require("express"); // Importing Express
const router = express.Router();
const homeController = require("../controllers/homeController"); // Importing homeController from Controllers folder


router.get("/", homeController.home); // Setting up our home route

router.use("/products", require("./product"));  // Setting up our product route






module.exports = router; // Exporting our router.