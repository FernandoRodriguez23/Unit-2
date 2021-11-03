/*
    post('/') createTask => adds a new task to list
    delete('/:id') removeTask => deletes an existing task from list
    put('/:id') updateTask => update a single task
    get('/:id') getTask => read a single task
    delete('/') clearTasks => deletes all
    get('/') getAllTasks => read all tasks
*/

const express = require("express");
const router = express.Router();

const {createTask, getAllTasks, getTask, removeTask, updateTask, clearTasks} = require('../controllers/tasksCon');

router.route("/").post(createTask).delete(clearTasks).get(getAllTasks);

router.route("/:id").put(updateTask).delete(removeTask).get(getTask);

module.exports = router;
