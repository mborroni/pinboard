var mysql = require('mysql');
var config = require('../config/env');
var connection = mysql.createConnection(config.mysql);
 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });

 module.exports = connection; 