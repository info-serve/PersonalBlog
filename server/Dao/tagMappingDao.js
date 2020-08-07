const dbUntil = require("../Dao/mySql")


function insertTagMapping(tagId, blogId, ctime, utime, success) {
    var insertSql = "insert into blogtagsmapping (`tagId`, `blogId`,`ctime`,`utime`) values (?,?,?,?);";
    var params = [tagId, blogId, ctime, utime];
    var connection = dbUntil.connectionSql()
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    });
    connection.end()

}

/**
 * 根据tagId查询博客
 * @param {*} tagId 
 * @param {*} page 
 * @param {*} pageSize 
 * @param {*} fn 
 */
function queryMappingTagId(tagId, page, pageSize, fn) {

    const queryTagIdSql = "select * from blogs.blogtagsmapping where tagId = ? limit ? ,? ";
    const params = [tagId, page * pageSize, pageSize];
    const connection = dbUntil.connectionSql();
    connection.query(queryTagIdSql, params, (err, res) => {

        err == null ? fn(res) : console.log(res)
    })
    connection.end();
}

/**
 * 查询tag全部数量
 * @param {*} fn 
 */
function queryByTagCount(tagId, fn) {
    const queryTagIdCountSql = "select  COUNT(1) as count from blogs.blogtagsmapping  where tagId =?";
    const params = [tagId];
    const connection = dbUntil.connectionSql();
    connection.query(queryTagIdCountSql, params, (err, res) => {

        err == null ? fn(res) : console.log(res)
    })
    connection.end();
}

module.exports.insertTagMapping = insertTagMapping
module.exports.queryMappingTagId = queryMappingTagId
module.exports.queryByTagCount = queryByTagCount
