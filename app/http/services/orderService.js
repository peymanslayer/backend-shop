const orderModel=require('../../models/order')
module.exports=class OrderService{
  async addOrder(productid,userid){
     const result=await orderModel.create({
        user_id:userid,
        product_id:productid
     })
     return{
        massage: result,
        status:200
    }
  }
}