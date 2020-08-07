let dbUntil = require("../Dao/mySql")
function insertEveryDay(content, ctime, utime, fn) {//添加
    const insertSql = "insert into blogs.erverydayone (`content`,`ctime`,`utime`) values(?,?,?);";
    const params = [content, ctime, utime];
    const connection = dbUntil.connectionSql();
    connection.query(insertSql, params, (err, res) => {
        err == null ? fn(res) : console.log(err)
    });
    connection.end();
}
//查询
function queryEveryDay(fn) {
    const quertSql = "SELECT * FROM blogs.erverydayone order by id desc limit 1;";
    const params = [];
    const connection = dbUntil.connectionSql();
    connection.query(quertSql, params, (err, res) => {
        err == null ? fn(res) : console.log(err)
    })
    connection.end();
}
//查询所有
function queryEveryAll(fn) {
    const quertSqlAll = "SELECT * FROM blogs.erverydayone order by id desc ";
    const params = [];
    const connection = dbUntil.connectionSql();
    connection.query(quertSqlAll, params, (err, res) => {
        err == null ? fn(res) : console.log(err)
    })
    connection.end();
}
module.exports.insertEveryDay = insertEveryDay;
module.exports.queryEveryDay = queryEveryDay;
module.exports.queryEveryAll = queryEveryAll