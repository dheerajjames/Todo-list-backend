const Task = require('../model/taskSchema');
const uniqid = require('uniqid');
const sendResponse = require('../utils/sendResponse');


const addValidation = (req, res, next) => {
    let validKeys = ['content', 'createdAt', 'updatedAt'];
      if(req.params.id){
          validKeys.push('iscompleted');
      }
  
      
      if(!validKeys.every(key => {
          return Object.keys(req.body).includes(key);
      })){
          return sendResponse({
              res,
              statusCode: 400,
              message: 'Response Body not formed properly',
              error: 'parameters missing'
          })
      }
  
      next();
  };
  

const getAllTasks = async (req, res) => {
 let tasks = await Task.find();
 res.status(200).json({
     message: 'Successful',
     data: [...tasks],
 })
}
const getTaskById = async (req, res) => {
    let taskbyid=await Task.find({taskId:req.params.id})
    if(taskbyid.length === 0){
        sendResponse({
            res,
            statusCode:404,
            message:"ID does not exist",
            error:"ID does not exist"
        })
    }
    else{
    sendResponse({
        res,
        statusCode:200,
        message:"user found",
        data:taskbyid
    })
}
}
const addTask = async (req, res) => {
    try{
    const newTask = Task({
        taskId: uniqid(),
        content: req.body.content,
        createdAt: req.body.createdAt,
        updatedAt: ""
    })
    await newTask.save()
    sendResponse({
        res,
        statusCode:200,
        message: 'Successful added',
        data: newTask
    })
}catch(err){
    sendResponse({
        res,
        statusCode:204,
        message: 'Cannot add',
        error:error
    })
}
}
const updateTask = async(req, res) => {

    const updatetask= await Task.findOneAndUpdate({taskId:req.params.id}, {$set: req.body});
   
    if(!updatetask){
            sendResponse({
                res,
                statusCode:404,
                message:"id does not exist",
                error: "id does not exist"
            })
        }
        else{
        sendResponse({
            res,
            statusCode:200,
            message:"updated changes",
        })
        }
}


const deleteTask = (req, res) => {
    Task.remove({taskId:req.params.id},(err,log)=>{
        if(err){
            sendResponse({
                res,
                statusCode:404,
                message:"it does not exist",
            })
        }
        sendResponse({
            res,
            statusCode:204,
            message:"deleted",
        })
    })
}
module.exports = {
    getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask,
    addValidation
}
