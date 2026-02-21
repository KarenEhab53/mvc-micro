const express = require('express');
const router=express.Router();

const {addProduct} =require("..controller/elecController");
router.post("/add",addProduct);
module.exports = router;