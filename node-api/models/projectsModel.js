var db = require("../bin/mysql");

module.exports = class projectsModel {

    // Get all projects
    getAllProjects() {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM projects", [], function (error, result) {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Get project by id
    getProjectById(id) {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM projects WHERE id LIKE '%" + id + "%'", [], function (error, result) {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Create a new project
    newProject(data){
        return new Promise(function(resolve, reject){
            db.query("INSERT INTO projects (name, description) VALUES (?, ?)", [data.name, data.description], function (error, result){
                if(!result) {
                    return reject(result);
                }
                resolve(result);
             })
        })
    }

    // Delete a task by id
    deleteProject(data){
        return new Promise(function(resolve, reject){
            db.query("DELETE FROM projects WHERE id LIKE '%" + data.id + "%'", [], function(error, result) {
                if(!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Update a project
    // updateProject(data){
    //     return new Promise(function(resolve, reject){
    //         db.query("UPDATE FROM projects SET ? WHERE id LIKE'%" + data.id + "%'", [[{ name: data.name, description: data.description }], function (error, result) {
    //             if(!result) {
    //                 return reject(result);
    //             }
    //             resolve(result);
    //         })
    //     })
    // }
}