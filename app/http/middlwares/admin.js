const userModel=require('../../models/users');
const path=require("path");
const exactPath=path.join(__dirname,"../../../");
require("dotenv").config({path:exactPath+"/.env"})
console.log(exactPath);
module.exports={
    adminMiddlware:async (req,res,next)=>{
        
        const result= await userModel.findById(req.params.id);
        console.log(result);
        if(result.token===process.env.ADMIN_ROLE){
            next()
        }
        else{
            res.status(401).json("not admin")
        }


    }
}