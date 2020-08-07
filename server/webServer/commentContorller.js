const getTimes = require("../until/getTtime");
const resWrite = require("../until/setRes");
const commentsDao = require("../Dao/commentDao");
const tagDao = require("../Dao/tagsDao");
const tagMappingDao = require("../Dao/tagMappingDao")
let url = require("url");
const svgCaptcha = require("svg-captcha")

const path = new Map();

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function insertCommetsing(req, res) {
    const params = url.parse(req.url, true).query;
    // console.log(params)
    // req.on("data",(data)=>{

    // })
    commentsDao.insertCommentBlogs(
        parseInt(params.bid),
        params.parent,
        params.parentName,
        params.userName,
        params.commets,
        params.email,
        getTimes.getTimer(),
        getTimes.getTimer(),
        (result) => {
            res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
            res.write(resWrite.writeContent("success", "评论成功", null));
            res.end();
        })

}

path.set("/api/blog/commenting/commentsInsert", insertCommetsing);

/**
 * 最新评论
 * @param {*} req 
 * @param {*} res 
 */
function queryblogCommentNew(req, res) {
    const params = url.parse(req.url, true).query;
    commentsDao.queryBlogComments(6, (result) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        res.write(resWrite.writeContent("success", "查询成功", result));
        res.end();
    })
}

path.set("/api/blog/blogComments/queryComnents", queryblogCommentNew);

/**
 * 随机验证码
 * @param {*} req 
 * @param {*} res 
 */
function getRandomCode(req, res) {
    let img = svgCaptcha.create({
        width: 120,
        height: 50,
        fontSize: 35,
        noise: 0,
        // background:'#ddc',
        // color:true,
        charPreset: '1234567890',
        size: 6
    });
    res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" })
    res.write(resWrite.writeContent("success", "查询成功", img));
    res.end();

}


path.set('/api/sendComments/randomCode', getRandomCode)


/**
 * 根据博客Id找评论
 * @param {*} req 
 * @param {*} res 
 */
function queryBlogIdComments(req, res) {
    const params = url.parse(req.url, true).query;
    // console.log(params)
    commentsDao.queryBlogIdComment(parseInt(params.blog_id), (result) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        res.write(resWrite.writeContent("success", "查询成功", result));
        res.end();
    })
}




path.set("/api/blog/blogComment/queryBlogIdCommenting", queryBlogIdComments)











module.exports.path = path;








