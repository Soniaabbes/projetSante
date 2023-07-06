const express= require('express');
const isAuth = require('../Middelwares/isAuth');
const { getAllProducts, getOneProduct, getuserProduct, createProduct, updateProduct, deleteProduct, updateProductImg } = require('../Controllers/ProductsController');
const router= express.Router();
//get all products
router.get ("/getAllProducts",getAllProducts)
//get one product by id
router.get ("/getOneProduct/:id",getOneProduct)
// get product by user id
router.get ("/getPrductUser/:id", getuserProduct)
// create new product 
router.post ("/createProduct" ,isAuth,createProduct)
//update product
router.put ("/updatePrduct/:id" ,updateProduct)
router.put ("/updatePrductImg" ,updateProductImg)


// delete product
router.delete('/deleteProduct/:id',deleteProduct )
module.exports = router;