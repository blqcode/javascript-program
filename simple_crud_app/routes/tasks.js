const express = require('express')
const {getAllTasks,creteTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')
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


router.route('/').get(getAllTasks).post(creteTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports=router