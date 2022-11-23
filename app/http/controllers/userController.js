const UserService =require("../services/userService");
const catchAsync=require('../../utils/AsyncError')
const service=new UserService

module.exports={
  getOrder:catchAsync( async (req,res,next)=>{
    const result=await service.getOrderByUser(req.body.userId)

    res.status(result.status).json(result.massage)
  })
}
