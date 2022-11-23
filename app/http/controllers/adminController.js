const AdminService=require('../services/adminService');
const catchAsync=require('../../utils/AsyncError')
const service=new AdminService
module.exports={
    isAdmin:async (req,res)=>{
     res.status(200).json("is admin")
    },
    addProduct:catchAsync (async (req,res,next)=>{
      const result=await service.addProduct(req.params.user,req.file,req.body)
      res.status(result.status).json(result.massage)
    
    }),
    updateProduct:catchAsync (async (req,res,next)=>{
      const result=await service.UpdateProductByimage(req.params.id,req.files)
      res.status(result.status).json(result.massage)
    }),
    updateBydata:catchAsync(async (req,res,next)=>{
      const result=await service.updateBydata(req.params.id,req.body);
      res.status(result.status).json(result.massage)
    }),
    deleteProduct:catchAsync( async (req,res,next)=>{
      const result=await service.deleteProduct(req.params.id);
      res.status(result.status).json(result.massage)
    }),
    getProduct:catchAsync (async (req,res,next)=>{
      const result=await service.getProduct(req.params.id);
      res.status(result.status).json(result.massage);
    }),
    getAllproduct:catchAsync(async (req,res,next)=>{
      const result=await service.getAllProduct();
      res.status(result.status).json(result.massage)
    })
}