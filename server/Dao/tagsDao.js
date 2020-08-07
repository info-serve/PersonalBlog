const dbUntil = require("./mySql");

//添加tag
function insertTag(tag, ctime, utime, fn) {
    const insertTagSql = "insert into blogs.tags (`tag`,`ctime`,`utime`) values (?,?,?);";
    const params = [tag, ctime, utime];
    const connection = dbUntil.connectionSql();
    connection.query(insertTagSql, params, (err, res) => {

        err == null ? fn(res) : console.log(res)
    })


    connection.end();

}


function queryTagToinsert(tag,fn){//查询标签
    const queryTagSql = "select * from blogs.tags  where tag = ?";
    const params = [tag];
    const connection = dbUntil.connectionSql();
    connection.query(queryTagSql, params, (err, res) => {

        err == null ? fn(res) : console.log(res)
    })


    connection.end();

}


//查询所有标签

function queryTagAlls(fn){
    const queryTagSql = "select * from blogs.tags ";
    const params = [];
    const connection = dbUntil.connectionSql();
    connection.query(queryTagSql, params, (err, res) => {

        err == null ? fn(res) : console.log(res)
    })
    connection.end();
}








module.exports.insertTag = insertTag;
module.exports.queryTagToinsert = queryTagToinsert
module.exports.queryTagAlls = queryTagAlls