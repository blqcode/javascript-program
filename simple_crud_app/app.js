const express  = require('express')
const connectDb = require('./db/conectDB')
const {connect} = require('mongoose')
const tasks = require('./routes/tasks')
require('dotenv').config()
const app= express()


//middlewares
app.use(express.json())

//routes
app.use('/api/v1/tasks',tasks)


 const port = process.env.PORT|3000
const start = async()=>{
   try{ 
    
    await connectDb(process.env.MONGO_URI)
    app.listen(3000,()=>{
    console.log(`listening on port:${port}`)
    })
}catch(error){
    console.log(`error:${error}`)
}

}
//

start()

