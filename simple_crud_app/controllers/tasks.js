const Task = require('../models/tasks')
const getAllTasks=async(req,res) =>{
    
    try {
    const allTasks = await Task.find({})
        res.json(allTasks)
    } 
    catch (error) {
        console.log(error)
    }
}


const creteTask= async (req,res)=>{
   try{ const task = await Task.create(req.body)
    res.status(201).json({task})
    console.log(req.body)
    
   }catch(error){
    console.log(`error: ${error}`)
   }
}
const getTask= async (req,res) =>{
    try {
        const {id:taskId}=req.params
        const task = await Task.findOne({_id:taskId})
        res.status(201).json(task)
        if(!task){
            return res.status(404).json({msg:`no task with this ${taskId} as id`})
        }
    } catch (error) {
        console.log(`error: ${error}`)
    }

}
const updateTask= async (req,res) =>{
   try {
    const {id:taskId} = req.params
    const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
        new:true,
        runValidators:true,
    })
    res.status(200).json(task)
    if(!task){
        return res.status(404).json({msg:`no task with this ${taskId} as id`})
    }
   } catch (error) {
    res.status(500).json(`error: ${error}`)
   } 

}
const deleteTask=async(req,res) =>{
    try {
        const {id:taskId }= req.params
        const task  = await Task.deleteOne({_id:taskId})
       
        if(!task){
            return res.status(404).json({msg:`no task with this ${taskId} as id`})
        }
        res.status(200).json({task})
    } catch (error) {
        console.log(`error: ${error}`)
    }

}


module.exports={
    getAllTasks,getTask,creteTask,updateTask,deleteTask

}