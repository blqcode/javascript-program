const express = require('express')
const {Task}=require('../models/tasks')
const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(201).json(req.boby)
        
    } catch (error) {
        console.log(`error:${error}`)
    }
}
const getSingleTask = async (req,res)=>{
    try {
        const {id:taskId}=req.params
        const tasks = await Task.findOne({_id:taskId})
        if(!tasks){
            res.send(`no task with that id found`)
        }
        res.status(200).json(tasks)
        
    } catch (error) {
        console.log(`error:${error}`)
    }
}
const createTask = async (req,res)=>{
    try {
        const tasks = await Task.create(req.body)
        res.status(201).json(tasks)
    } catch (error) {
        console.log(`error:${error}`)
    }
}
const updateTask = async (req,res)=>{
    try {
        const {id:taskId} = req.params
        const tasks = await Task.findOneAndUpdate({_id:taskId},req.boby,{
            new:true,
            runValidators:true
        })
        if(!tasks){
            res.send(`no task with that id found`)
        }
        res.status(200).json(req.body)
        
    } catch (error) {
        console.log(`error:${error}`)
    }
}
const deleteTask = async (req,res)=>{
    try {
        const {id:taskId}=req.params
        const tasks = await Task.findOneAndDelete({_id:taskId})
        if(!tasks){
            res.send(`no task with that id found`)
        }
        res.status(200).send('sucessfully deleted')
        
    } catch (error) {
        console.log(`error:${error}`)
    }
}

module.exports = {
    createTask,getAllTasks,getSingleTask,deleteTask,updateTask
}