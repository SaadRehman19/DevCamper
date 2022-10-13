const mongoose=require('mongoose');

//When we use mongoose method it return promise

const connectDB=async()=>{

    const conn=await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
}

module.exports = connectDB;