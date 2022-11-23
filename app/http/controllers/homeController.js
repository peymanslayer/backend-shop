
const HomeService=require('../services/home');
const catchAsync=require('../../utils/AsyncError')
const path1=require("path");
const service=new HomeService

module.exports={
    readProduct:catchAsync( async (req,res)=>{
      const result=await service.ReadProduct(req.body)
      res.status(result.status).json(result.massage)
    }),
    deleteProduct:catchAsync( async (req,res)=>{
        const id=req.params.id;
        const result=await service.DeleteProduct(id)
        res.status(result.status).json(result.massage)

    }),
    Search:catchAsync( async (req,res)=>{
      const result=await service.AutoComplete(req.body.product)
      res.status(result.status).json(result.massage)
    }),
    SearchProduct:catchAsync( async (req,res)=>{
      
      const result=await service.Search(req.body);
      res.status(result.status).json(result.massage)
  
  
  })


}