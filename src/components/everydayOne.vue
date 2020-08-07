<template>
  <div class="everyday" id="app">
    <span>
      <h3>每日一句</h3>
    </span>
    <span class="mv" title="查看历史记录" @click="historyClick">
      <h6>历史记录</h6>
    </span>
    <p v-text="getContent"></p>
  </div>
</template>

<script>
import api from "../api/api"
export default {
  data() {
    return {
      getContent: "",
    };
  },
  created(){
    api.queryEveryday().then(res=>{
      if(res.data.data[0] == null){
        this.getContent = "你暂时未有数据"
      }else{
        this.getContent = res.data.data[0].content
      }
      // console.log(res.data.data[0])
    })
  },
  methods: {
    historyClick() {
      console.log("查看历史记录")
    },
  },
};
</script>

<style>
</style>
