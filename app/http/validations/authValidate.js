const joi=require('joi');
const existance=require('email-existence');
module.exports=class Validate{
constructor(selected){
  this.selected=selected
}

  registerValidator(){ 
    
    const schema = joi.object().keys({
        email:joi.string().required().messages({'string.empty':'قسمت ایمیل باید خالی نباشد'}),
        mobile: joi.string().required().messages({'string.empty':'قسمت موبایل باید پر باشد'}),
        password:joi.string().required().min(5).max(15).messages({'string.empty':'رمز عبور نباید خالی باشد',
        'string.min':'رمز عبور نباید کمتر 5 کاراکتر باشد',
        'string.max':"رمز عبور حداکثر 15 حرف باید باشد",
    }),
        lastName:joi.string().required().messages({'string.empty':'نام خانوادگی نباید خالی باشد'}),
        firstName:joi.string().required().messages({'string.empty':'نام نباید خالی باشد'}),
        role:joi.string().messages({'string.empty':'نام نباید خالی باشد'})
      });
  return schema
  }

  loginValidator(){
    const schema=joi.object().keys({
      email:joi.string().required().messages({
        'string.empty':'قسمت ایمیل باید خالی نباشد'
      }),
      password:joi.string().required().min(5).max(15).messages({'string.empty':'رمز عبور نباید خالی باشد',
        'string.min':'رمز عبور نباید کمتر 5 کاراکتر باشد',
        'string.max':"رمز عبور حداکثر 15 حرف باید باشد",
    }),
    })
    return schema
  }
  emailExist(){
    existance.check(this.selected,function(error, response){
      console.log(response);
     return response
  })
  }
 
}