const getTimes = require("../until/getTtime");
const resWrite = require("../until/setRes");
const blogEidtDao = require("../Dao/blogArticleEidtDao");
const tagDao = require("../Dao/tagsDao");
const tagMappingDao = require("../Dao/tagMappingDao")
let url = require("url");
const { request } = require("http");
let path = new Map()

//添加到数据库
function insertDataBase(req, res) {
    let params = url.parse(req.url, true).query;
    // console.log(params)
    const tags = params.tags.replace(/\，|\, |\。|\.|\s+/g, ",");//处理用户填写tag
    // console.log(tags)
    req.on("data", (data) => {
        // console.log(data.toString())
        blogEidtDao.insertBlogDatabases(params.title, data.toString(), 0, tags, getTimes.getTimer(), getTimes.getTimer(), (result) => {
            // console.log(result);
            res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
            res.write(resWrite.writeContent("success", "添加成功", null));
            res.end();
            let blogId = result.insertId

            let blogListTag = tags.split(",");//tags以，fen ge

            for (let i = 0; i < blogListTag.length; i++) {
                if (blogListTag[i] == "") {
                    continue
                }
                queryTags(blogListTag[i], blogId);//没有就插入tag
            }
        })
    })

}
/**
 * This function is to query tag
 * @param {*} tag 没有tag就添加，有了就把tagId添加到映射表中去
 * @param {*} blogId  博客id
 */
function queryTags(tag, blogId) {
    tagDao.queryTagToinsert(tag, (res) => {//首先查询tag，tag是否存在，不存在就添加
        if (res == null || res.length == 0) {
            insertByTags(tag, blogId)//添加tag
        } else {
            // console.log("query:", res)
            tagMappingDao.insertTagMapping(res[0].id, blogId, getTimes.getTimer(), getTimes.getTimer(), (res) => {
                // console.log(res)
            })
        }
    })
}
/**
 * This function is to add tag
 * @param {*} tag 
 * @param {*} blogId 
 */
function insertByTags(tag, blogId) {
    tagDao.insertTag(tag, getTimes.getTimer(), getTimes.getTimer(), (res) => {
        // console.log("mapp:",res)
        insertTagMappings(res.insertId, blogId)
    })

}
/**
 * This function adds the tag and blog id to the mapping table
 * @param {*} tagId 
 * @param {*} blogId 
 */
function insertTagMappings(tagId, blogId) {
    tagMappingDao.insertTagMapping(tagId, blogId, getTimes.getTimer(), getTimes.getTimer(), (res) => {

    })
}
path.set("/api/blog/insert/article", insertDataBase)


/**
 * 按页查询
 * @param {*} req 
 * @param {*} res 
 */
function blogByPage(req, res) {
    const params = url.parse(req.url, true).query;
    // console.log("page:",params)
    blogEidtDao.queryBlogByfindPage(parseInt(params.page), parseInt(params.pageSize), (result) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        res.write(resWrite.writeContent("success", "查询成功", result));
        res.end()
    })
}

path.set("/api/blog/blogByPage", blogByPage);
/**
 * 查询数量
 * @param {*} req 
 * @param {*} res 
 */
function blogByCount(req, res) {
    blogEidtDao.queryBlogBycount((resp) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        res.write(resWrite.writeContent("success", "查询成功", resp));
        res.end()
    })
}

path.set("/api/blog/blogCount", blogByCount)



function queryBlogById(req, res) {
    const params = url.parse(req.url, true).query;
    // console.log(params)
    blogEidtDao.queryBlogId(parseInt(params.id), (result) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        res.write(resWrite.writeContent("success", "查询成功", result));
        res.end()
        blogEidtDao.updateViews(parseInt(params.id), (res) => {

        })

    })
}
path.set("/api/blog/blogById", queryBlogById);

function queryBlogAll(req, res) {
    blogEidtDao.queryBlogByAll((result) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        res.write(resWrite.writeContent("success", "查询成功", result));
        res.end()
    })
}
path.set("/api/blog/blogByAll", queryBlogAll)

function queryBlogHot(req, res) {
    const params = url.parse(req.url, true).query
    blogEidtDao.hotBlog(parseInt(params.size), (result) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
        res.write(resWrite.writeContent("success", "查询成功", result));
        res.end()
    })
}
path.set("/api/blog/blogHot", queryBlogHot)

module.exports.path = path;