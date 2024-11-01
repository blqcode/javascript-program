const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = require('./db/connectdb')
const router = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const app = express()


app.use('api/v1/products',router)
//midlewares
app.use(express.json())


//routes



router.get('/',(req,res)=>{
    res.send(`</h1>Store API</h1><a href"api/v1/product">product route</a>`)
})


  



 

const start = async () =>{
   try {
    const port = process.env.PORT||3000

    await connectDB(process.env.MONGO_DB)
   
   app.listen(port,()=>{
    console.log(`connected on port ${port}`);
    
   })
}catch(error){
    console.log(`error: ${error}`)
   }
   
}

start()