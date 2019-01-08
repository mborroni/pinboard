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
            db.query("SELECT * FROM projects WHERE id LIKE ? && deletedAt is NULL", [projectId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Create a new project
    newProject(data) {
        return new Promise((resolve, reject) => {
            // data.name, data.description
            db.query("INSERT INTO projects (name, dueDate) VALUES (?, ?)", [data.name, data.dueDate], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                //resolve(result);
                return this.getProjectById(result.insertId).then(data => {
                    resolve(data)
                });
            })
        })
    }

    //Update a project
    updateProject(id, data) {
        return new Promise((resolve, reject) => {
            console.log("DATA UPDATE->")
            console.log(data);
            db.query("UPDATE projects SET name = ?, dueDate = ?, isDone = ? WHERE id LIKE ?", [data.name, data.dueDate, data.isDone, id], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }


    // Delete a project by id
    deleteProject(project) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE projects SET deletedAt = ? WHERE id LIKE ?", [Date.now(), project.id], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
}