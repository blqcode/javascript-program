const express = require('express')
const {
    createTask,getAllTasks,getSingleTask,deleteTask,updateTask
} = require('../controllers/tasks')
const router = express.Router()

// route.get('./tasks',(req,res)=>{
//     res.send('helllo get')
// })

// route.post('./tasks',(req,res)=>{
//     res.send('helllo get')
// })

// route.get('./task/:id',(req,res)=>{
//     res.send('helllo get')
// })

// route.patch('./task/:id',(req,res)=>{
//     res.send('helllo get')
// })

// route.delete('./task/:id',(req,res)=>{
//     res.send('helllo get')
// })



router.route('/').get(getAllTasks).post(createTask)
router.route("/:id").patch(updateTask).delete(deleteTask).get(getSingleTask)

module.exports=router