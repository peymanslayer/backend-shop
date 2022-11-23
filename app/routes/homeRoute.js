
const {readProduct}=require('../http/controllers/homeController');
const {deleteProduct}=require('../http/controllers/homeController');
const {Search}=require('../http/controllers/homeController');
const {SearchProduct}=require('../http/controllers/homeController')
const express=require('express');
const multer=require('multer');
const bodyparser=require('body-parser');

const homeRouter=express.Router()


homeRouter.get('/readproduct',readProduct)
homeRouter.delete('/deleteproduct/:id',deleteProduct);
homeRouter.post('/searchproduct',Search);
homeRouter.post('/search',SearchProduct)
module.exports=homeRouter