import Product from "../models/Product"

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

export const createProducts = async (req, res) => {
    const { name, price, description, quantity } = req.body;
    const newProduct = new Product({
        name, price, description, quantity
    });
    await newProduct.save();
    res.json(newProduct);
}

export const updateProducts = (req, res) => {
    res.json('updated product')
}

export const getProductsById = (req, res) => {
    res.json('get product')
}

export const deletProducts = (req, res) => {
    res.json('deleted product')
}