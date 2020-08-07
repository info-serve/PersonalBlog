import api from "../api/api"

export default {
  namespaced: true,

  state: {
    newCommets: [],
    dataHtml: "",
    textCode: '',
    blogIdCommentNum: 0,
    blogIdCommentList: [],
    isShowComment: false,
    reply: -1,
    replyName: 0
  },
  mutations: {
    getNewComment(state, list) {
      state.newCommets = list
    },
    setRandomCode(state, tool) {
      state.textCode = tool
    },
    setRandomCodeHTML(state, list) {
      state.dataHtml = list
    },
    setBlogIdCommentNum(state, num) {
      state.blogIdCommentNum = num
    },
    setBlogIdCommentList(state, list) {
      state.blogIdCommentList = list
    },
    setIsshow(state, lid) {
      state.isShowComment = lid
    },
    setReply(state, res) {
      state.reply = res
    },
    setReplyName(state, res) {
      state.replyName = res
    }
  },
  actions: {
    /**
     * 发送评论
     * @param {*} param0
     * @param {*} params
     */
    postSendComment({ dispatch, commit, state }, params) {
      return api.sendComments(params).then(res => {
        alert(res.data.msg);
        dispatch("getNewCommentsList")//发表评论成功出发刷新
        dispatch("getRandomCodes")
      })
    },
    /**
     * 获取最新评论
     * @param {*} param0
     */
    getNewCommentsList({ commit, dispatch, state }) {
      return api.queryCommentNew().then((result) => {
        commit("getNewComment", result.data.data);
      }).catch((err) => {
        console.log(err)
      });

    },
    /**
     * 获取随机验证码
     * @param {*} param0
     */
    getRandomCodes({ state, commit, dispatch }) {
      return api.getRandomCode().then(res => {
        commit("setRandomCode", res.data.data.text)
        commit("setRandomCodeHTML", res.data.data.data)
        // console.log(res.data.data)
      })

    },

    getBlogIdBycommentList({ state, commit, dispatch }, blogId) {
      return new Promise((resolve) => {
        api.getCommentByBlogId(blogId).then(res => {
          // console.log(res.data.data)
          if (res.data.data.length == 0 || res.data.data == "") {
            commit("setIsshow", false)
          } else {
            commit("setIsshow", true)
            commit("setBlogIdCommentNum", res.data.data.length)
            commit("setBlogIdCommentList", res.data.data)
          }
          resolve(res)
        })

      })
    }























  }








}
