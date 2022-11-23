const data= require('./initSeeder');
const productModel=require('../models/product');
const fs= require("fs")
function seeder(){
const result= data.map(async x=>{
    console.log(x);
  console.log(__dirname);
    await productModel.create(
      x

    )
    return result
})}


 module.exports=seeder