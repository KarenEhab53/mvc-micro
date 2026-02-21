
const express = require("express");
const router = express.Router();
const{productFilter}=require("../controllers/productController")
router.get("/product", productFilter);
router.get("/all", productGet);

module.exports = router;

