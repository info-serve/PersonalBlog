const dbUntil = require("./mySql");
/**
 * 添加评论
 * @param {*} blog_id 
 * @param {*} parent 
 * @param {*} parentName 
 * @param {*} userName 
 * @param {*} commets 
 * @param {*} email 
 * @param {*} ctime 
 * @param {*} utime 
 * @param {*} fn 
 */
function insertCommentBlogs(blog_id, parent, parentName, userName, commets, email, ctime, utime, fn) {
    const commentSql = "insert into blogs.comments (`blog_id`, `parent`, `parentName`, `userName`, `commets`, `email`, `ctime`, `utime`) values (?,?,?,?,?,?,?,?);"
    const params = [blog_id, parent, parentName, userName, commets, email, ctime, utime];
    const connection = dbUntil.connectionSql();
    connection.query(commentSql, params, (err, res) => {
        err == null ? fn(res) : console.log(err)
    });
    connection.end();
}
/**
 * 查询最新博客
 * @param {*} num 展示数量
 * @param {*} fn 
 */
function queryBlogComments(num, fn) {
    const newCommentSql = "select * from blogs.comments where parent = -1 order by id desc limit ?;";
    const params = [num]
    const connection = dbUntil.connectionSql();
    connection.query(newCommentSql, params, (err, res) => {
        err == null ? fn(res) : console.log(err)
    });
    connection.end();
}

/**
 * 根据blogId找评论
 * @param {*} blogId 
 * @param {*} fn 
 */
function queryBlogIdComment(blog_id,fn){
    const BlogsCommentSql = "select * from blogs.comments where blog_id = ?;";
    const params = [blog_id]
    const connection = dbUntil.connectionSql();
    connection.query(BlogsCommentSql, params, (err, res) => {
        err == null ? fn(res) : console.log(err)
    });
    connection.end();
}









module.exports.insertCommentBlogs = insertCommentBlogs;
module.exports.queryBlogComments = queryBlogComments;
module.exports.queryBlogIdComment = queryBlogIdComment