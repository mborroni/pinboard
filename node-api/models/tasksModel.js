var db = require("../bin/mysql");

// var dateTime = require('node-datetime');
// var dt = dateTime.create();
// var formatted = dt.format('Y-m-d H:M:S');

module.exports = class tasksModel {

    // Get task by ProjectId
    getTasksByProjectId(projectId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM tasks WHERE projectId LIKE ? && deletedAt is NULL", [projectId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Create a new task
    newTask(data) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO tasks (name, dueDate, projectId) VALUES (?, ?, ?)", [data.name, data.dueDate, data.projectId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                return this.getTaskById(result.insertId).then(data => {
                    resolve(data)
                });
            })
        })
    }

    // Update a task
    updateTask(id, data) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE tasks SET name = ?, dueDate = ?, isDone = ? WHERE id LIKE ?", [...data, id], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Delete a task SET deletedAt = hour
    deleteTask(taskId) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE tasks SET deletedAt = ? WHERE id LIKE ?", [Date.now(), taskId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })

        })
    }


    /* NON NECESSARY */
    // Get task by Id
    getTaskById(taskId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM tasks WHERE id LIKE ?", [taskId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Get all tasks
    getAllTasks() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM tasks", [], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
}