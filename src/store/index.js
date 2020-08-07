import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import api from "../api/api"
import blogBypageing from "./pageByblog"
import newCommenting from "./comments"
import tagState from "./tagState"
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    blogBypageing,
    newCommenting,
    tagState
  }
}
)

export default store
