const express = require("express");
const router = express.Router();
const{productFilter}=require("../controllers/productController")
router.get("/product", productFilter);
module.exports = router;
