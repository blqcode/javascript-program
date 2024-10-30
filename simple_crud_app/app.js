const {connect} = require('mongoose')
const express  = require('express')
const connectDb = require('./db/coonectDB')
const {router} = require('./routes/tasks')
const tasks = require('./models/tasks')
const app= express()
require('dotenv').config

//middlewares
app.use(express.json())
//routes
app.use('/api/v1/tasks',tasks)


 const port = process.env.PORT|3000
const start = async()=>{
   try{ 
    
    await connectDb('mongodb+srv://princeally556:0000@tasks.zsku5.mongodb.net/?retryWrites=true&w=majority&appName=tasks')
    app.listen(3000,()=>{
    console.log(`listening on port:${port}`)
    })
}catch(error){
    console.log(`error:${error}`)
}

}
//process.env.MONGO_URI

start()

