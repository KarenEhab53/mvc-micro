const express = require('express');
const router = express.Router();
const { 
  productGet 
} = require("../controllers/productController");

router.get("/all", productGet);

module.exports = router;