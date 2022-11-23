const mongoose=require('mongoose');

const userModel=mongoose.Schema({
    email:{
        required:true,
        type:String
    },
    mobile:{
        required:true,
        type:String
    },
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
    role:{
        default:"user",
        type:String,
        required:false
    }
    
})

module.exports=mongoose.model('user',userModel);