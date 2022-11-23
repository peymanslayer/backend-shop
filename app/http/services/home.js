const productModel=require('../../models/product')
const fs=require("fs");
const path=require('path')
const {ObjectID, default: mongoose}=require("mongoose")
class HomeService{
 async ReadProduct(selected){
    try{
       const result= await productModel.paginate({}, { page: selected.page, limit: selected.limit });
       if(result){
        return{
            status:200,
            massage:[result.docs,result.limit,result.offset,result.page,result.pages,result.total]
        }
       }else{
        return{
            status:400,
            massage:"error"
        }
       }
      
    }catch(err){
        return{
            status:403,
            massage:"مشکلی بوجود امده"
        }
    }
  }
 async DeleteProduct(selected){
   const find=await productModel.findOne({_id:mongoose.Types.ObjectId(selected)})
   if(find){
    find.remove();
    const way=path.join(__dirname,"../../../");
    const exactPath=way+'public/'+find.image
    fs.unlink(exactPath)
        return{
        status:200,
        massage:"done"
    }
   }else{
    return{
        status:400,
        massage:"چنین دوره ای وجود ندارد"
    }
   }
 }
 async AutoComplete(Product){
  // productModel.createIndexes({category:'text',model:'text'})
   const find=await productModel.find({$regular:{$search:Product}}) ;
   if(find){
    return {
        status:200,
        massage:find
    }
   }else{
    return{
      status:404,
      massage:"not product"
    }
   }
 }
 async Search (product){
   const find=await productModel.findOne(product);
   if(find){
    return{
      status:200,
      massage:find,
    }
  }else{
   return{
    status:400,
    massage:'lkjk'
   }
  }
   }
 }
 
 module.exports=HomeService