const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxlength:[100,'no longer than 100 allowed']
    },
    completed:{
        type:Boolean,
        default:false
        
    }
})


module.exports = mongoose.model('Task',taskSchema)