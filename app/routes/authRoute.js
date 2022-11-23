const express=require('express');
const {Register}=require('../http/controllers/authController');
const {Login}=require("../http/controllers/authController")
const authRoute=express.Router();
const Validate=require('../http/validations/authValidate');
const validation=new Validate;
authRoute.post('/register',Register)
authRoute.post('/login',Login)
module.exports={
    authRoute
}