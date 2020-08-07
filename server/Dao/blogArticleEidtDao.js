const dbUntil = require("./mySql");


//添加到数据库
function insertBlogDatabases(title, content, view, tags, ctime, utime, fn) {
    const instar = "insert into blogs.article (`title`,`content`,`view`,`tags`,`ctime`,`utime`) values(?,?,?,?,?,?);";
    const connection = dbUntil.connectionSql();
    const params = [title, content, view, tags, ctime, utime]
    connection.query(instar, params, (err, res) => {
        err == null ? fn(res) : console.log(err)
    });
    connection.end()

}
/**
 * 按页查询
 * @param {*} page 
 * @param {*} pageSize 
 * @param {*} fn 
 */
function queryBlogByfindPage(page, pageSize, fn) {
    const instar = "select * from blogs.article order by id desc limit ? ,?;";
    const connection = dbUntil.connectionSql();
    const params = [page * pageSize, pageSize]
    connection.query(instar, params, (err, res) => {
        // console.log("dao:",res)
        err === null ? fn(res) : console.log(err)
    });
    connection.end()

}
/**
 * 查询博客总数
 * @param {*} fn 
 */
function queryBlogBycount(fn) {
    const instar = "select COUNT(1) as count from blogs.article   ;";
    const connection = dbUntil.connectionSql();
    const params = []
    connection.query(instar, params, (err, res) => {
        err === null ? fn(res) : console.log(err)
    });
    connection.end()
}

/**
 * Query blog id, find blog according to id
 * @param {*} id 
 * @param {*} fn 
 */
function queryBlogId(id, fn) {
    const blogIdSql = "select * from blogs.article where id = ?;";
    const params = [id];
    const connection = dbUntil.connectionSql();
    connection.query(blogIdSql, params, (err, res) => {
        err === null ? fn(res) : console.log(err)
    })
    connection.end();
}
function updateViews(id, fn) {
    const blogIdSql = "update  blogs.article set view= view + 1 where id = ?;";
    const params = [id];
    const connection = dbUntil.connectionSql();
    connection.query(blogIdSql, params, (err, res) => {
        err === null ? fn(res) : console.log(err)
    })
    connection.end();
}
function queryBlogByAll(fn){
    const blogIdSql = "select * from blogs.article ;";
    const params = [];
    const connection = dbUntil.connectionSql();
    connection.query(blogIdSql, params, (err, res) => {
        err === null ? fn(res) : console.log(err)
    })
    connection.end();
}
/**
 * 
 * @param {*} size 查询多少条
 * @param {*} fn 回调函数
 */
function hotBlog(size,fn){
    const blogIdSql = "select * from blogs.article order by view desc limit ?;";
    const params = [size];
    const connection = dbUntil.connectionSql();
    connection.query(blogIdSql, params, (err, res) => {
        err === null ? fn(res) : console.log(err)
    })
    connection.end();
}
module.exports.insertBlogDatabases = insertBlogDatabases
module.exports.queryBlogByfindPage = queryBlogByfindPage;
module.exports.queryBlogBycount = queryBlogBycount
module.exports.queryBlogId = queryBlogId;
module.exports.updateViews = updateViews
module.exports.queryBlogByAll = queryBlogByAll
module.exports.hotBlog = hotBlog