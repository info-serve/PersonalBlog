<template>
  <div class="page">
    <a href="javascript:void(0);" @click="pageHandel(1)" :class="{disabled:curPage===1}">首页</a>
    <a
      href="javascript:void(0);"
      @click="pageHandel(curPage - 1)"
      :class="{disabled:curPage===1}"
    >第一页</a>
    <a
      href="javascript:void(0);"
      :class="{active:curPage === item}"
      v-for="(item,index) in numbers"
      :key="index"
      @click="pageHandel(item)"
    >{{item}}</a>
    <a
      href="javascript:void(0);"
      @click="pageHandel(curPage + 1)"
      :class="{disabled:curPage===totalPage}"
    >下页</a>
    <a
      href="javascript:void(0);"
      @click="pageHandel(totalPage)"
      :class="{disabled:curPage===totalPage}"
    >尾页</a>
  </div>
</template>
<script>
import api from "../api/api";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      curPage: 1, //当前页
      limitPageNum: 2, //限制展示几个数字
    };
  },
  created() {
    this.getByBlogCoun();
    this.getBlogByPages()
  },
  computed: {
    ...mapState("blogBypageing", {
      totalPage: (state) => Math.ceil(state.totalPage / 5),
    }),
    numbers() {
      let min = this.curPage - Math.floor(this.limitPageNum / 2);
      if (min < 1) {
        min = 1;
      }
      let max = this.limitPageNum + min - 1;
      if (max > this.totalPage) {
        max = this.totalPage;
      }
      let arr = [];
      for (let i = min; i <= max ; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    ...mapActions("blogBypageing", ["getByBlogCoun","getBlogByPages"]),
    pageHandel(newpage) {
      if (newpage < 1) {
        newpage = 1;
      }
      if (newpage > this.totalPage) {
        newpage = this.totalPage;
      }
      this.curPage = newpage;
      // console.log(newpage);
      this.$store.dispatch("blogBypageing/getBlogByPages", this.curPage);
    },
  },
};
</script>
<style  scoped>
.page {
  height: 50px;
  line-height: 50px;
  margin-top: 15px;
}
.page > a {
  display: inline-block;
  height: 30px;
  width: 60px;
  text-align: center;
  line-height: 30px;
  margin: 0 3px;
  background-color: #fff;
}
.page > a.active {
  color: #fff;
  background-color: #3c68df;
}
.page > a:hover {
  color: #fff;
  background-color: #a6bbf5;
}
.page > a.disabled {
  background: #ddd;
  color: #ccc;
  cursor: not-allowed;
}
</style>
