const Product = require("../models/product"); // Importing Product Schema


// Action for getting all products
module.exports.getProducts = async function(req, res){
    try{

        const product = await Product.find({});

        return res.status(200).json({
            products : product
        });

    }catch(err){
        console.log("Error ", err);
        return res.status(500).json({
            message : "Internal Server Error:"
        });
    }
};


// Action for getting one particular product
module.exports.getOneProduct = async function(req, res){
    try{
        const product = await Product.findById(req.params.id);

        if(product){
            return res.status(200).json({
                product: product
            });
        }

        return res.staus(500).json({
            mesaage : "This product is not exists!"
        });
    }catch(err){
        console.log("Error ", err);
        return res.status(500).json({
            message : "Internal Server Error:"
        });
    }
};


// action for adding or creating a product
module.exports.addProduct = async function(req, res){
    try{
        const product = await Product.create({
            name : req.body.name,
            quantity : req.body.quantity
        });

        return res.status(200).json({
            message :"Product added successfully.",
            data :{
                product : product
            }
        });

    }catch(err){
        console.log("Error ", err);
        return res.status(500).json({
            message : "Internal Server Error:"
        });
    }
};


// action for deleting a particular product
module.exports.removeProduct = async function(req, res){
    try{

        const product = await Product.findById(req.params.id);

        if(product){
            product.deleteOne()
            return res.status(200).json({
                message : "Product deleted sucessfully. "
            })
        }

        return res.status(200).json({
            message : "The product with given id is dosent exists"
        })

    }catch(err){
        console.log("Error ", err);
        return res.status(500).json({
            message : "Internal Server Error:"
        });
    }
};


// action for updating a particular product
module.exports.update_quantity = async function(req, res){
    try{
        
        //Extracting the Quantity to update from the URL which are passed through query
        let update_quantity = req.query.number;
        
        //Extracting the id from the URL which are passed through params
        const id = req.params.id;
        
        // Fetching the product by id
        let product = await Product.findById(id);
        
        // If product is not found
        if(!product){
            
            // Throws Error
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        
        update_quantity = parseInt(update_quantity,10);

        // checking if the update quantity is number
        if(!isNaN(update_quantity)){
            
            // Updating the quantity of the selected product
            product.quantity += update_quantity;
            
            // storing the updated product
            let updatedProduct = await product.save();
            
            
            // on success shows the updated product
            return res.status(200).json({
                data : {
                    product : updatedProduct
                },
                message : "Product updated successfully"
            });
        }
        else{
            // if not a number 
            return res.status(400).json({
                message : "Please enter a Number to update quantity"
            });
        }
        
        
    }catch(err){
        
        // To view error
        console.log("****",err);
        
        //Throws error on failure
        return res.status(500).json({
            message : "Error in updating quantity"
        });
    }
}

