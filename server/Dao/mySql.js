const mysql = require("mysql");

function connectionSql(){
     let connection = mysql.createConnection({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'',
        database:'blogs'
    });
    return connection
}
module.exports.connectionSql = connectionSql
