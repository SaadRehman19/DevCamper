const ErrorResponse=require('../utils/errorResponse')

const errorHandler=(err,req,res,next)=>{

    let error={...err};
    error.message=err.message;
    
   // log to console for dev
    // console.log(err)
    
    // console.log(err.stack.red);
    // let p=(Object.values(err.errors).map(v=>v.message))
    // console.log(p)
    
    
    //Mongoose bad ObjectId
    if(err.name==='CastError'){
        const msg=`Resource not found with id of ${err.value}`;
        error=new ErrorResponse(msg,404);
    }
    
    //Mongoose Duplicate Key
    if(err.code===11000){
        const msg=`Duplicate field value entered `;
        error=new ErrorResponse(msg,400)
    
    }
    //Mongoose validation error
    if(err.name==='Validation Error'){
        const msg=Object.values(err.errors).map(v=>v.message);
        error=new ErrorResponse(msg,400)
     }
    
    res.status(error.statusCode||500).json({
    success:false,
    error:error.message || 'Server Error'
    })
    
} 

module.exports=errorHandler;