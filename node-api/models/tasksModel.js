var db = require("../bin/mysql");

module.exports = class tasksModel {

    // Get task by ProjectId
    getTasksByProjectId(projectId) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM tasks WHERE projectId LIKE ? && deletedAt is NULL ORDER BY isDone ASC", [projectId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }

    // Create a new task
    newTask(task) {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO tasks (name, dueDate, projectId) VALUES (?, ?, ?)", [task.name, task.dueDate, task.projectId], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                return this.getTaskById(result.insertId).then(data => {
                    resolve(data[0])
                });
            })
        })
    }

    // Update a task
    updateTask(id, task) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE tasks SET name = ?, dueDate = ?, isDone = ? WHERE id LIKE ?", [task.name, task.dueDate, task.isDone, id], (error, result) => {
                if (!result) {
                    return reject(result);
                }
                return this.getTaskById(id).then(data => {
                    resolve(data[0])
                });
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