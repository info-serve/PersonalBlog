import api from "../api/api"

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  actions: {
    getTagRandomAll({ state, commit, dispatch }) {

      //  console.log(res)
      return new Promise(resolve => {
        api.getRandomTags().then(res => {
          resolve(res)
        })
      })

    },
    getTagpage({ state, commit, dispatch }, params) {
      return new Promise(resolve => {
        api.queryTagIdByBlog(params).then(res => {
          resolve(res)
        })
      })

    },
  }
}
