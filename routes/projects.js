var express = require('express');
var router = express.Router();
var projectsModel = require("../models/projectsModel");
var projects = new projectsModel();

router.get('/', function(req, res, next){
    projects.getAllProjects().then(data=>{
        res.json(data);
    })
});

router.get('/:id', function(req, res, next){
    projects.getProjectById(req.params.id).then(data=>{
        res.json(data)
    })
});

module.exports = router;