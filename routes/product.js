const express = require("express"); // Importing Express
const router = express.Router();
const productController = require("../controllers/product_controller"); // Importing product controller from controllers folder

router.get("/", productController.getProducts);  // this route is getting all the products

router.get("/:id", productController.getOneProduct); // this route is getting a particular product (fetched by ID)

router.post("/create", productController.addProduct); // this route is creating a product

router.delete("/:id", productController.removeProduct); // this route is deleting a particular product (fetched by ID)

router.post("/:id/update", productController.update_quantity); // this route is updating a particular product (fetched by ID)






module.exports = router;