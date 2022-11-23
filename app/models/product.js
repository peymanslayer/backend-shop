const mongoose= require('mongoose');
const crypto=require("crypto");
var mongoosePaginate = require('mongoose-paginate');
const productModel=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
        index:true
    },
    model:{
        type:String,
        required:true,
        index:true
    },
    price:{
        type:String,
        required:true
    },
    offPrice:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    feature:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
})
 productModel.index({ category:'text',model:'text'})
productModel.plugin(mongoosePaginate)
module.exports=mongoose.model('product',productModel);