const { name } = require('ejs')
const mongoose = require('mongoose')

const taskSchema= new mongoose.Schema({
    name:{
        type:String,
        require:[true,'should fill it'],
        trim:true,
        maxlength:[50,'name can not be moore than 50 chars']
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('Task',taskSchema)