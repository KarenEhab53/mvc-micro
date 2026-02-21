const Product = require("../models/Product");
const User = require("../models/User")
const bcrypt = require("bcrypt");

addProduct=async(req,res)=>{
  try {

    const { user,product_name ,price,quantity,stock } =req.body;
    if(user.role !== "admin")
    return res.status(404).json({msg:"only admin can add"})
    if (!product_name||!price||!quantity||!stock)
    return res.status(400).json({ msg: "missing data" });
    
  }
  catch(error){
    console.log(error)
    res.status(500).json({
      success: false,
      msg: "Server error",
      error: err.message,
  });
}}
module.exports = {
  userAdd
};
