const {authRoute}=require("./authRoute");
const homeRouter=require('./homeRoute');
const adminRoute=require('./adminRoute');
const orderRoute=require('./orderRoute');
const userRoute=require('./userRoute');
const express= require('express');

const app= express()
const router=express.Router();


router.use(authRoute,homeRouter,adminRoute,orderRoute,userRoute);

module.exports=router
