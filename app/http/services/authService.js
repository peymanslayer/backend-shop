const userModel=require('../../models/users');
const Validate=require('../validations/authValidate');
const bcrypt= require('bcrypt');
const path=require('path');
const jwt=require('jsonwebtoken');
// const exactPath=path.join(__dirname,"../../../");
// require("dotenv").config({path:exactPath+"/.env"})
module.exports= class AuthService{
 async Register(selected){
    const validation=new Validate(selected.email)
    const emailExist=validation.emailExist();
    const IsValidate= validation.registerValidator();
    const findUser=await userModel.findOne({email:selected.email});
 const {error}= IsValidate.validate(selected, { abortEarly: false })
   if(error){
    return {
        status:401,
        massage:error
    }
   }
   else if(emailExist===false){
    return {
        status:400,
        massage:"ایمیل وجود ندارد"
    }
   }
   else if(findUser){
  
   return{
    status:202,
    massage:"user exist"
   }
    }else{
        const hashSalt=10
        const hashed=await bcrypt.hash(selected.password,hashSalt)
        const token=jwt.sign({email:selected.email},config.secret,{
          expiresIn:"2d"
      })
     const user=  await userModel.create({
            email:selected.email,
            password:hashed,
            firstName:selected.firstName,
            lastName:selected.lastName,
            mobile:selected.mobile,
            token:token
        })
        return{
            status:201,
            massage:user
        }
    }
}



  async Login(selected){
    const validation=new Validate(selected.email)
    const emailExist=validation.emailExist();
    const IsValidate= validation.loginValidator();
    const {error}= IsValidate.validate(selected, { abortEarly: false })
    
    if(error){
        return{
            status:404,
            massage:error
        }
    }else if(emailExist===false){
       return{
        status:400,
        massage:"چنین ایمیلی وجود ندارد"
       }
    }

    else{
        const userFind= await userModel.findOne({email:selected.email})
      const result= bcrypt.compare(selected.password,userFind.email);
      if(result===false){
        return{
            status:400,
            massage:"not valid"
        }
      }else{
        const token=jwt.sign({email:userFind.email},"1234")

        return{
            status:200,
            massage:token
        }
      }
    }
  }
}