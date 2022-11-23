const orderModel=require("././../../models/order");
const userModel=require('../../models/users')
class UserService{
  async getOrderByUser(userId){
    const find=await orderModel.aggregate([
        {
          $lookup: {
            from: "user",
            localField: "user_id",
            foreignField: userId,
            as: "orderById",
          },
        }
      ])
      if(find){
        return{
            massage:find,
            status:200
        }
      }else{
        return{
            massage:"not found",
            status:404
        }
      }
  }
}

module.exports=UserService