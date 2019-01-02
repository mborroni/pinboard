var express = require('express');
var router = express.Router();
var tasksModel = require("../models/tasksModel");
var tasks = new tasksModel();

router.get('/', function(req, res, next){
    tasks.getAllTasks().then(data=>{
        res.json(data)
    })
});

router.post('/', function(req, res, next){
    tasks.newTask(req.body).then(data=>{
        console.log(req.body)
        res.json(data)
    })
});

router.get('/:projectId', function(req, res, next){
    tasks.getTasksByProjectId(req.params.projectId).then(data=>{
        res.json(data)
    })
});

router.put('/:taskId', function(req, res, next){
    tasks.updateTask(req.params.taskId).then(data=>{
        console.log(req.params.taskId)
        res.json(data)
    })
})

router.delete('/:taskId', function(req, res, next){
    tasks.deleteTask(req.params.taskId).then(data=>{
        console.log(req.params.taskId)
        res.json(data)
    })
})

module.exports = router;