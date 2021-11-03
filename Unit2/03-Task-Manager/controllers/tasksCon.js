const asyncWrapper = require('../middleware/async');
const Tasks = require('../models/Tasks');

const getAllTasks = asyncWrapper(async(req, res) => {

    const tasks = await Tasks.find({})
    //{} find all


    res.json({method: req.method, tasks})
});

const createTask =  asyncWrapper(async (req, res) => {
  // res.json({method: req.method, task: 'createTask', body: req.body})
  const task = await Tasks.create(req.body)
  res.status(201).json({method: req.method, task, body: req.body})
});
const updateTask =  asyncWrapper(async(req, res) => {
    const {id} = req.params
    const task = await Tasks.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    res.json({method: req.method, task: task, params: req.params, body: req.body})
 
  
});
const removeTask =  asyncWrapper(async(req, res) => {
  const {id} = req.params
  try {
    const task = await Tasks.findByIdAndDelete(id)
    if(!task){
      return res.json({msg: `No Tasks with id of ${id}`})
    }
    res.json({method: req.method, task: task, params: req.params})
  } catch (err){
    res.status(404).json({err})
  }
  
});
const clearTasks =  asyncWrapper(async(req, res) => {
  const task = await Tasks.deleteMany({})
    res.json({method: req.method, task: task})  
});
const getTask =  asyncWrapper(async(req, res) => {

  try {
    const task = await Tasks.findById(req.params)
    if(!task){
      return res.status(404).json({msg: `No task with ${req.params} as an ID`})
    }
    res.json({method: req.method, task: task, params: req.params})
  } catch (err) {
    res.status(404).json({err})
  }

 
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  removeTask,
  clearTasks,
  getTask,
};

/*
Creating a library DB

CLUSTER => library
COLLECTION => books
DOCUMENTS => Hary Poter....

*/