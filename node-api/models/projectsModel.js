var db = require("../bin/mysql");

module.exports = class projectsModel {

    // Get all projects
    getAllProjects() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM projects", [], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Get project by id
    getProjectById(projectId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM projects WHERE id LIKE ?", [projectId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Create a new project
    newProject(data){
        return new Promise((resolve, reject) => {
            // data.name, data.description
            db.query("INSERT INTO projects (name, description) VALUES (?, ?)", [...data], (error, result) => {
                if(!result) {
                    return reject(result);
                }
                // resolve(result);
                return this.getProjectById(result.insertId).then(data => {
                    resolve(data)
                });
             })
        })
    }

    // Delete a task by id
    deleteProject(data){
        return new Promise((resolve, reject) => {
            db.query("DELETE FROM projects WHERE id LIKE ?", [data.id], (error, result) => {
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