var db = require("../bin/mysql");

module.exports = class tasksModel {

    // Get all tasks
    getAllTasks() {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM tasks", [], function (error, result) {
                if(!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Get task by ProjectId
    getTasksByProjectId(projectId) {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM tasks WHERE projectId LIKE '%" + projectId + "%'", [], function (error, result) {
                if(!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Get task by Id
    getTaskById(id) {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM tasks WHERE id LIKE '%" + id + "%'", [], function (error, result) {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Create a new task
    newTask(data){
        return new Promise(function(resolve, reject){
            db.query("INSERT INTO tasks (name, dueDate, isDone, deletedAt, projectId) VALUES (?, ?, ?, ?, ?)", [data.name, data.description, data.projectId], function (error, result){
                if(!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Delete a task by id
    deleteTask(data){
        return new Promise(function(resolve, reject){
            db.query("DELETE FROM tasks WHERE id LIKE '%" + data.id + "%'", [], function(error, result) {
                if(!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Update a task
    updateTask(data){
        return new Promise(function(resolve, reject){
            db.query("UPDATE FROM tasks SET  ? WHERE id LIKE'%" + id + "%'", [{ name: data.name, description: data.description, projectId: data.projectId}], function (error, result) {
                if(!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
}
