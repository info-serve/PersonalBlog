const { default: Axios } = require("axios");

import axios from "axios";
// 全局默认值
axios.defaults.baseURL = 'http://127.0.0.1:8080';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.params = {
    ...config.params,//如果多个可以克隆
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
let pageSize = 5
let api = {
  /**
   * 每日模块的请求接口
   */
  insertEveryDay() {//添加每日一句
    return axios.post("/api/blog/inserteveryDay/one")

  },
  queryEveryday() {//查询每日一句
    return axios.get("api/blog/everyDay/queryone")
  },
  //查询每日一句历史记录
  queryEverydayHistory() {
    return axios.get("api/blog/everyDay/queryHistory")
  },
  /**
   * 博客列表文章内容模块请求接口
   */
  insertBlog(params) {//添加
    return axios.post("api/blog/insertBlog", params);
  },

  blogByPage(page = 1) {//按页查询
    return axios.get("/api/blog/blogByPage", {
      params: {
        page,
        pageSize
      }
    })

  },
  //查询博客总数
  getBlogByCount() {
    return axios.get("/api/blog/blogCount")
  },
  /**
   * 根据id查询博客
   * @param {*} params
   */
  getBlogId(params) {
    return axios.get("/api/blog/blogById", { params })
  },
  /**
   * 查询所有博客
   */
  getBlogAll() {
    return axios.get("/api/blog/blogByAll")
  },
  /**
   * 查询热门博客
   * @param {*} params size 展示多少条热门博客 必填
   */
  getBlogHot(params) {
    return axios.get("/api/blog/blogHot", { params })
  },
  /**
   *
   * @param {*} params
   * params 包含参数 【必须】 bid, parent, parentName, userName, commets, email
   */
  sendComments(params) {
    return axios.get("/api/blog/commenting/commentsInsert", { params })
  },
  /**
   * 获取最新评论
   */
  queryCommentNew() {
    return axios.get("/api/blog/blogComments/queryComnents");
  },

  /**
   * 获取随机验证码
   */
  getRandomCode() {
    return axios.get("/api/sendComments/randomCode")
  },
  getCommentByBlogId(params) {
    return axios.get("/api/blog/blogComment/queryBlogIdCommenting", { params })
  },

  /**
   * 随机标签
   */

  getRandomTags() {
    return axios.get("/api/blog/blogTags/TagRandom")
  },
  queryTagIdByBlog(params) {
   return axios.get("/api/blog/blogTag/queryTagIdByBlogId",{params})
  },

  queryTagCountNum(params) {
      return axios.get("/api/blog/blogTag/queryTagCountNum",{params})
  }







}





export default api;
