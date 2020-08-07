const express = require('express');
const config = require("./config");
const loader = require("./loader");
// const proxy = require('http-proxy-middleware');
const connectHistoryApiFallback = require("connect-history-api-fallback")
let app = new express();
/**
 * 允许跨域
 */
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
})

app.use(express.static('./page/'));
//接口
/**
 * 每日一句
 */
app.post("/api/blog/inserteveryDay/one", loader.get("/api/blog/inserteveryDay/one"))//添加每日一句接口
app.get("/api/blog/everyDay/queryone", loader.get("/api/blog/everyDay/queryone"));
app.get("/api/blog/everyDay/queryAll", loader.get("/api/blog/everyDay/queryAll"))//查询所有每日一句
/**
 * 博客列表
 */
app.post("/api/blog/insert/article", loader.get("/api/blog/insert/article"));
app.get("/api/blog/blogByPage", loader.get("/api/blog/blogByPage"))
app.get("/api/blog/blogCount", loader.get("/api/blog/blogCount"));
app.get("/api/blog/blogById", loader.get("/api/blog/blogById"))
app.get("/api/blog/blogByAll", loader.get("/api/blog/blogByAll"))
app.get("/api/blog/blogHot", loader.get("/api/blog/blogHot"))

/**
 * 评论模块接口
 */
//添加评论
app.get("/api/blog/commenting/commentsInsert", loader.get("/api/blog/commenting/commentsInsert"));
//查询最新评论
app.get("/api/blog/blogComments/queryComnents", loader.get("/api/blog/blogComments/queryComnents"))
app.get("/api/sendComments/randomCode", loader.get("/api/sendComments/randomCode"));
app.get("/api/blog/blogComment/queryBlogIdCommenting", loader.get("/api/blog/blogComment/queryBlogIdCommenting"))

/**
 * 随机标签接口
 */
app.get("/api/blog/blogTags/TagRandom", loader.get("/api/blog/blogTags/TagRandom"))
app.get("/api/blog/blogTag/queryTagIdByBlogId", loader.get("/api/blog/blogTag/queryTagIdByBlogId"))
app.get("/api/blog/blogTag/queryTagCountNum", loader.get("/api/blog/blogTag/queryTagCountNum"))
app.use(connectHistoryApiFallback())
app.listen(80, (res) => {
  console.log("服务已启动")
})
