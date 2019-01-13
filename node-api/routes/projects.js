var express = require('express');
var router = express.Router();
var projectsModel = require("../models/projectsModel");
var projects = new projectsModel();

router.get('/', function (req, res, next) {
    projects.getAllProjectsByUserId(req.user.id).then(data => {
        res.json(data);
    })
});

router.get('/:projectId', function (req, res, next) {
    projects.getProjectById(req.params.projectId).then(data => {
        res.json(data)
    })
});

router.post('/', function (req, res, next) {
    projects.newProject(req.body, req.user.id).then(data => {
        res.json(data)
    })
});

router.put('/:projectId', function (req, res, next) {
    projects.updateProject(req.params.projectId, req.body).then(data => {
        res.json(data)
    })
})

router.delete('/:projectId', function (req, res, next) {
    projects.deleteProject(req.body).then(data => {
        res.json(data)
    })
})
module.exports = router;