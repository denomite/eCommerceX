import asyncHandler from "../middleware/asyncHandler.js"; // Importing asyncHandler
import Product from "../models/productModel.js"; // Importing Product model


const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(product){
        return res.json(product);
    } else {
        res.status(404);
        throw new Error('Resource not found');
    }
});

export { getProducts, getProductById };