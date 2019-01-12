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
    newProject(project) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO projects (name, dueDate, userId) VALUES (?, ?, ?)", [project.name, project.dueDate, project.userId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                return this.getProjectById(result.insertId).then(data => {
                    resolve(data[0]);
                });
            })
        })
    }

    //Update a project
    updateProject(id, project) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE projects SET name = ?, dueDate = ? WHERE id LIKE ?", [project.name, project.dueDate, id], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                return this.getProjectById(id).then(data => {
                    resolve(data[0])
                });
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