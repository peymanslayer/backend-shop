const ErrorService=require('../services/errorService');
const service=new ErrorService
const sendErrorDev = (err, req, res) => {
    // A) API
    if (req.originalUrl.startsWith('/api')) {
      return res.status(err.statusCode).json({
        error: err,
        message: err.message,
        stack: err.stack
      });
    }
  
    // B) RENDERED WEBSITE
    console.error('ERROR 💥', err);
    return res.status(err.statusCode).json('error', {
      title: 'Something went wrong!',
      msg: err.message
    });
    
  };
const sendErrorProd = (err, req, res) => {
     // A) API
  if (req.originalUrl.startsWith('/api')) {
    
    // A) Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    }
    // B) Programming or other unknown error: don't leak error details
    // 1) Log error
    else{
    console.error('ERROR 💥', err);
    // 2) Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }}

  // B) RENDERED WEBSITE
  // A) Operational, trusted error: send message to client
  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message
    });
  }
  // B) Programming or other unknown error: don't leak error details
  // 1) Log error
  console.error('ERROR 💥', err);
  // 2) Send generic message
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: 'Please try again later.'
  });
 };
module.exports=(err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    err.message=err.message
    if (process.env.NODE_ENV === 'development') {
        sendErrorDev(err, req, res);
      } else if (process.env.NODE_ENV === 'production') {
        let error = { ...err };
        error.message = err.message;
        if(error.message.includes('validation')) error=service.handleValidationErrorDB(error)
        if (error.name === 'CastError') error = service.handleCastErrorDB(error);
        if (error.name === 'JsonWebTokenError') error = service.handleJWTError();
        if (error.name === 'TokenExpiredError') error = service.handleJWTExpiredError();
    
        sendErrorProd(error, req, res);
      }
}