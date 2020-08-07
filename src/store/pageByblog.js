import api from "../api/api"
export default {
  namespaced: true,
  state: {
    page: 1,
    blogList: [],
    totalPage: 1,
    blogDetailList: []
  },
  mutations: {
    getBlogList(state, list) {
      state.blogList = list;
    },
    getBlogCounting(state, counts) {
      state.totalPage = counts;
    },
    getBlogDetail(state, list) {
      state.blogDetailList = list;
    }
  },



  actions: {
    getBlogByPages({ state, commit, dispatch }, page = 1) {
      return api.blogByPage(page - 1).then(res => {
        // console.log(res.data.data)
        commit("getBlogList", res.data.data)
      })

    },
    getByBlogCoun({ commit }) {
      return api.getBlogByCount().then(res => {
        // console.log(res.data.data[0].count)
        commit("getBlogCounting", res.data.data[0].count)
      })
    },
    getBlogListById({ commit, dispatch }, id) {
      return new Promise((resolve, reject) => {
        api.getBlogId(id).then(res => {
            resolve(res)
        })

        // commit("getBlogDetail", res.data.data[0])

      })



    },












  }












}
