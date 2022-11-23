const AppError = require("../../utils/AppError");
 module.exports=class ErrorService{
   handlerRequired =err=>{
    console.log('oi');
    const message="invalid data";
    return new AppError(message,400)

  }
     handleCastErrorDB = err => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
  };
  
   handleDuplicateFieldsDB = err => {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new AppError(message, 400);
  };
  
   handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message);
    console.log(err.isOperational);
    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
  };
  
   handleJWTError = () =>
    new AppError('Invalid token. Please log in again!', 401);
  
   handleJWTExpiredError = () =>
    new AppError('Your token has expired! Please log in again.', 401);
}