var db = require("../bin/mysql");

module.exports = class projectsModel {

    getAllProjects() {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM projects", [], function (error, result) {
                console.log("New Select projects Promise", result);
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
    getProjectById(id) {
        return new Promise(function (resolve, reject) {
            db.query("SELECT * FROM projects WHERE id LIKE '%" + id + "%'", [], function (error, result) {
                console.log("New select project by id Promise", result);
                if (!result) {
                    return reject(result);
                }
                resolve(result);
            })
        })
    }
    // newProject(data){
    //     return new Promise(function(resolve, reject){
    //         db.query("INSERT INTO projects (description, projectId) VALUES ('" + data.description + "', '" + data.projectId + "')", [], function (error, result){
    //             console.log("New project Promise", result);
    //             if(!result) {
    //                 return reject(result);
    //             }
    //             resolve(result);
    //         })
    //     })
    // }
}