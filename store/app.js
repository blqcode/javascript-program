const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = require('./db/connectdb')
const app = express()

//midlewares
app.use(express.json())





const start = async () =>{
   try {
    const port = process.env.PORT

    await connectDB(process.env.MONGO_DB)
   
   app.listen(port,()=>{
    console.log(`connected on port ${port}`);
    
   })
}catch(error){
    console.log(`error: ${error}`)
   }
   
}

start()