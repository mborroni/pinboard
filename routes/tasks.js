var express = require('express');
var router = express.Router();
var tasksModel = require("../models/tasksModel");
var tasks = new tasksModel();

router.get('/', function(req, res, next){
    tasks.getAllTasks().then(data=>{
        res.json(data);
    })
});

// Get task
// router.get('/:id', function(req, res, next){
//     tasks.getTaskById(req.params.id).then(data=>{
//         res.json(data)
//     })
// });

router.get('/:projectId', function(req, res, next){
    tasks.getTasksByProjectId(req.params.projectId).then(data=>{
        res.json(data)
    })
});

module.exports = router;