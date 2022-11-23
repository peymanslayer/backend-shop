const OrderService=require('../services/orderService');
const catchAsync=require('../../utils/AsyncError')
const service=new OrderService;

module.exports={
    addOrder:catchAsync( async (req,res,next)=>{
       const result =await service.addOrder(req.body.productid,req.body.userid) ;
     
       res.status(result.status).json(result.massage)
    })
}

