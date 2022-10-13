const express= require('express')
const dotenv=require('dotenv');
const morgan=require('morgan');
const colors=require('colors');
const errorHandler=require('./middleware/error')
const connectDB=require('./config/db');
// const { application } = require('express');

//load env vars
dotenv.config({path:'./config/config.env'});

//Connect to db
connectDB();

//Route Files
const bootcamps=require('./routes/bootcamps')



const app=express();

// const logger=(req,res,next)=>{
//     console.log("this is middleware");
//     next();
// }
// app.use(logger)




//Body Parser
app.use(express.json());



//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


//Mount routers
app.use('/api/v1/bootcamps',bootcamps);

app.use(errorHandler);



const PORT=process.env.PORT||5000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`.yellow.bold));




