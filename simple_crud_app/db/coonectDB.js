const mongoose = require('mongoose')
const connectString = process.env.URI


const connectDB = (url) =>{
    return mongoose.connect(url)
}

module.exports=connectDB