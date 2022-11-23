const express=require('express');

const {addProduct}=require('../http/controllers/adminController');
const {updateProduct}=require('../http/controllers/adminController');
const {updateBydata,isAdmin,getProduct}=require('../http/controllers/adminController');
const {deleteProduct,getAllproduct}=require('../http/controllers/adminController');
const {adminMiddlware}=require('../http/middlwares/admin')
const adminRoute=express.Router();
const {uploadMidllware,updateImage}=require('../http/middlwares/upload');
adminRoute.post("/isadmin/:id",adminMiddlware,isAdmin)
adminRoute.post('/api/addproduct/:user',uploadMidllware,addProduct);
adminRoute.put('/updateproductbyimage/:id',updateImage,updateProduct);
adminRoute.put("/updatebydata/:id",updateBydata);
adminRoute.delete("/deleteproduct/:id",deleteProduct);
adminRoute.get('/getproduct/:id',getProduct);
adminRoute.get('/getallproduct',getAllproduct);
module.exports=adminRoute