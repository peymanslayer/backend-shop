const productModel=require('../../models/product');
const Search=require('../../models/search')
class AdminService{
 async addProduct(user,selected,body){
       const find= await productModel.findOne({
        category:body.category,
        model:body.model,
        price:body.price
       });
       if(find){
        return{
            status:202,
            massage:"is exist"
        }
       }else{
       await productModel.create({
            image:selected.originalname,
            category:body.category,
            price:body.price,
            offPrice:body.offPrice,
            model:body.model,
            description:body.description,
            feature:body.feature,
            user:user.trim()
        })
       return{
        status:200,
        massage:'done'
       }
   
    }
      
    }
async UpdateProductByimage(selected,body){
    const result = await productModel.findOne({_id:selected})
    if(result){
       const UploadImage=await productModel.updateOne({_id:selected},{image:body.avatar.name});
       if(UploadImage){
        
        const exact=path.join(__dirname,"../../../");
    const pathDelete=exact+"public/"+result.image;
 
    fs.unlinkSync(pathDelete);
      return{
        status:200,
        massage:"image updated"
      }
        }else{
            return{
                status:404,
                massage:"something wrong"
            }
        }
    }else{
        return{
            status:400,
            massage:"product not found"
        }
    }
}
async updateBydata(selected,body){
    const result=await productModel.findByIdAndUpdate(selected,body);
    if(result){
        
        return{
            status:200,
            massage:result
        }
    }else{
        return{
            status:400,
            massage:"not updated"
        }
    }
}
async deleteProduct(selected){
  const result=await productModel.findByIdAndDelete(selected);

  if(result){
    const exact=path.join(__dirname,"../../../");
        const pathDelete=exact+"public/"+result.image;
     fs.unlinkSync(pathDelete)
    return{
        status:200,
        massage:"product deleted"
    }
  }else{
    return{
        status:404,
        massage:"got problem"
    }
  }
}
async getProduct(selected){
  const result=productModel.findById(selected);
  if(result){
    return{
        status:200,
        massage:result
    }
  }else{
    return{
        status:404,
        massage:"not defind"
    }
  }
}
async getAllProduct(){
    const result=await productModel.find()
    if(result){
        return{
            status:200,
            massage:result
        }
    }else{
        return{
            status:404,
            massage:"not defind"
        }
    }
}
}
module.exports=AdminService