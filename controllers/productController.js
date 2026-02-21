
const Product = require("../models/Product");
const User = require("../Models/User");

const addProduct=async(req,res)=>{
  try {

    const { userId, name, price, quantity, stock } = req.body;
     const user = await User.findById(userId);
    if (userId.role !== "admin")
      return res.status(404).json({ msg: "only admin can add" });
    if (!name || !price || !quantity || !stock)
      return res.status(400).json({ msg: "missing data" });
    
    const product = await Product.create({ name, price, quantity, stock });
    res.status(201).json({
      success: true,
      msg: "Product added successfully",
      data: product,
    });
  }
  catch(error){
    console.log(error)
  }
}


const productFilter = async (req, res) => {
  try {
    const { name } = req.query;

    const filter = {};
    const products = await Product.find(filter);

    if (products.length === 0) {
      return res.status(404).json({ msg: "Products not found" });
    }

    res.status(200).json({
      success: true,
      totalProducts: products.length,
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
}
const productGet = async (req, res) => {
  try {
 
    const products = await Product.find();
    if (!products ) {
      return res.status(404).json({ 
        success: false,
        msg: "No products found" 
      });
    }

    const count = await Product.countDocuments();
    res.status(200).json({
      success: true,
      msg: "Products fetched successfully",
      totalProducts: count,
      data: products,
    });
  } catch (err) {


    res.status(500).json({
      success: false,
      msg: "Server error",
      error: err.message,

  });
}}



module.exports = {
  productGet,
  productFilter,
  addProduct,
};

