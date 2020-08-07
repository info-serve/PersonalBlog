const tagsMappingDao = require("../Dao/tagMappingDao")
const resWrite = require("../until/setRes");
const getTimes = require("../until/getTtime")
const tagsDao = require("../Dao/tagsDao");
const blogDao = require("../Dao/blogArticleEidtDao");
// const { resolve } = require("path");
const url = require("url")
const path = new Map();

/**
 * 查询tagCloud
 * @param {*} req 
 * @param {*} res 
 */
function queryRandomTags(req, res) {
    tagsDao.queryTagAlls(result => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" })
        res.write(resWrite.writeContent("success", "查询成功", result));
        res.end();
    })



}

path.set("/api/blog/blogTags/TagRandom", queryRandomTags)


function queryByBlogId(req, res) {
    const params = url.parse(req.url, true).query;
    tagsDao.queryTagToinsert(params.tag, (result) => {

        if (result == null || result.length == 0) {
            res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" })
            res.write(resWrite.writeContent("success", "查询成功", result));
            res.end();
        } else {
            tagsMappingDao.queryMappingTagId(result[0].id, parseInt(params.page), parseInt(params.pageSize), (resp) => {

                let blogList = [];

                for (let i = 0; i < resp.length; i++) {
                    blogDao.queryBlogId(resp[i].blogId, (result) => {
                        blogList.push(result[0])
                    })
                }
                getResult(blogList,resp.length,res)
            })
        }
    })
}

function getResult(blogList,len,res){
    if(blogList.length < len){
        setTimeout(()=>{
            getResult(blogList,len,res)
        },10)
    }else{
        for (var i = 0; i < blogList.length; i++) {
            blogList[i].content = blogList[i].content.replace(/<img[\w\W]*">/, "");
            blogList[i].content = blogList[i].content.substring(0, 300);
        }
        res.writeHead(200);
        res.write(resWrite.writeContent("success", "查询成功", blogList));
        res.end();
    }
}

path.set("/api/blog/blogTag/queryTagIdByBlogId", queryByBlogId)





/**
 * 查询tag数量
 * @param {*} req 
 * @param {*} res 
 */
function queryBlogTagIdNum(req, res) {
    const params = url.parse(req.url, true).query;
    // console.log(params)
    tagsDao.queryTagToinsert(params.tag, (result) => {
        // console.log(result)
        tagsMappingDao.queryByTagCount(parseInt(result[0].id), (result) => {
            res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" })
            res.write(resWrite.writeContent("success", "查询成功", result));
            res.end();
        })
    })

}

path.set("/api/blog/blogTag/queryTagCountNum", queryBlogTagIdNum)

module.exports.path = path