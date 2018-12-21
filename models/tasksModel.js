var db = require("../bin/mysql");

module.exports = class tasksModel {

    getAllTasks() {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM tasks", [], function (error, result) {
                console.log("New select task Promise", result);
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
    getTasksByProjectId(projectId) {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM tasks WHERE projectId LIKE '%" + projectId + "%'", [], function (error, result) {
                console.log("New select task by projectId Promise", result);
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
    getTaskById(id) {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM tasks WHERE id LIKE '%" + id + "%'", [], function (error, result) {
                console.log("New select task by id Promise", result);
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
    newTask(data){
        return new Promise(function(resolve, reject){
            db.query("INSERT INTO tasks (description, projectId) VALUES ('" + data.description + "', '" + data.projectId + "')", [], function (error, result){
                console.log("New task Promise", result);
                if(!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
}
