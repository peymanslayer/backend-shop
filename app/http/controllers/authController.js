const validation= require("../validations/authValidate");
const {validationResult} = require('express-validator');
const AuthService=require('../services/authService');
const catchAsync=require('../../utils/AsyncError')
const validate=new validation;
const service=new AuthService
module.exports={
  Register: catchAsync( async (req,res,next)=>{{
 
    const resultApi=await service.Register(req.body);

    res.status(resultApi.status).json(resultApi.massage)
  
}}),
  Login:catchAsync( async  (req,res,next)=>{
    const resultApi=await service.Login(req.body);
    res.status(resultApi.status).json(resultApi.massage)
  })
}
