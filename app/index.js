const express= require('express');
const bodyParser= require('body-parser');
const app= express();
const Route=express.Router()
const session=require('express-session');
const cookieParser=require('cookie-parser');
const router= require('./routes');
const ErrorHandler=require('../app/http/middlwares/Errorhandler')
const { default: mongoose } = require('mongoose');
const multer=require('multer');
const path = require('path');
const AppError=require('./utils/AppError');
const Error= new AppError
const exactPath=path.join(__dirname,"../../");
require("dotenv").config({path:exactPath+"/.env"})
module.exports=class Applications{
    constructor(){  
             
        this.setupConfig();
        this.mongoConnection();
        this.expressSetup();
        this.setupRoute();
       
        
    }

    expressSetup(){
        app.listen(3001,()=>{
            console.log("app is running on port 3000");
        })
    }
    setupConfig(){
     
      app.use(express.json());
      app.use(express.urlencoded({extended: true}));
      app.use(session({
        secret: process.env.SESSION_KEY,
        resave: true,
        saveUninitialized: true,
      }))
      app.use(cookieParser(process.env.COCKEIE_KEY));
      app.use(express.static('public'));
     
    }
    mongoConnection(){
   const connection=  mongoose.connect(`${config.database.url}`)
   console.log(config.database.url);
   if(connection){
    console.log("connected");
   }else{
    console.log('problem');
   }
    }
    setupRoute(){
     app.use(router);
     app.all("*",(req,res,next)=>{
      next(Error('not',404))
  
    })
    app.use(ErrorHandler); 
     
    }
    
}