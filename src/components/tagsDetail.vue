<template>
  <div>
    <div class="content">
      <div class="content_lefts">
        <div class="description">
          <div class="msg">TAGs详情</div>this a tag query
        </div>
        <div class="art">
          <div class="article" v-for="(articles,index) in list" :key="index">
            <router-link
              tag="a"
              class="article_title"
              :to="{name:'detailBlog',params:{id:articles.title,link:articles.id}}"
            >{{articles.title}}</router-link>
            <div class="article_content">{{articles.content}}</div>
            <div class="article_footer">
              <span>发布于</span>
              <span>:</span>
              <span>{{  formTime(articles.ctime) }}</span>
              <span>阅读</span>
              <span>:</span>
              <span>{{articles.view}}</span>
              <span>标签</span>
              <span>：</span>
              <span>{{articles.tags}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page" v-if="showPage">
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
  </div>
</template>
<script>
import api from "../api/api";
export default {
  data() {
    return {
      shows: false,
      showPage: false,
      curPage: 1, //当前页
      limitPageNum: 2, //限制展示几个数字
      pageSize: 1,
      totalPages: 1,
      list: [
        {
          id: 11,
          title: "jefkd",
          content: "ijfklsf",
          ctime: "shadjk",
          tags: "sjksndks",
          view: 34,
        },
      ],
    };
  },
  created() {
    this.$store
      .dispatch("tagState/getTagpage", {
        page: this.curPage - 1,
        pageSize: this.pageSize,
        tag: this.$route.query.tag,
      })
      .then((res) => {
        if (res.data.data == "" || res.data.data == null) {
          this.shows = false;
          this.showPage = false;
        } else {
          // console.log(res);
          this.list = res.data.data;
          if (res.data.data.length == 1) {
            this.showPage = false;
          } else {
            this.shows = true;
            this.showPage = true;
          }
        }
      });
    api.queryTagCountNum({ tag: this.$route.query.tag }).then((res) => {
      // console.log(res.data.data[0].count);
      this.totalPages = res.data.data[0].count;
    });
  },
  methods: {
    pageHandel(newpage) {
      if (newpage < 1) {
        newpage = 1;
      }
      if (newpage > this.totalPage) {
        newpage = this.totalPage;
      }
      this.curPage = newpage;
      // console.log(newpage);
      this.$store
        .dispatch("tagState/getTagpage", {
          page: this.curPage - 1,
          pageSize: this.pageSize,
          tag: this.$route.query.tag,
        })
        .then((res) => {
          if (res.data.data == "" || res.data.data == null) {
            this.shows = false;
          } else {
            this.list = res.data.data;
            if (res.data.data.length == 1) {
              this.showPage = false;
            } else {
              this.shows = true;
              this.showPage = true;
            }
          }
        });
    },
  },
  computed: {
    formTime() {
      return function formTime(times) {
        let date = new Date(times * 1000);
        let year = date.getFullYear(); //获取年
        let monts = date.getMonth() + 1; //月
        let day = date.getDate();
        let hour = date.getHours();
        let mu = date.getMinutes();
        let secondes = date.getSeconds();
        monts = monts < 10 ? "0" + monts : monts;
        day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        mu = mu < 10 ? "0" + mu : mu;
        secondes = secondes < 10 ? "0" + secondes : secondes;
        return year + "年" + monts + "月" + day + "日" + " " + hour + ":" + mu;
      };
    },
    totalPage() {
      return Math.ceil(this.totalPages / this.pageSize);
    },
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
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
};
</script>
<style  scoped>
.content_lefts {
  width: 70%;
}
.page {
  height: 50px;
  line-height: 50px;
  margin-top: 15px;
  text-align: center;
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
