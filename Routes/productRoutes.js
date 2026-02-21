
const express = require('express');
module.exports = router;
const router = express.Router();
const{productFilter,addProduct,productGet}=require("../controllers/productController")
router.get("/product", productFilter);
router.get("/all", productGet);
router.post("/add",addProduct);

module.exports = router;


