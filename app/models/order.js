const mongoose=require('mongoose');

const orderModel=mongoose.Schema({
    product_id:{
       type:mongoose.Schema.Types.ObjectId,
       required:true,
       ref:"user"
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"product"
    }
})

module.exports=mongoose.model('order',orderModel);
