const express =require('express');
const {getOrder}=require("../http/controllers/userController")
const route=express.Router();

route.post("/findorder",getOrder);

module.exports=route