<template>
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
        <span>{{ formTime(articles.ctime) }}</span>
        <span>阅读</span>
        <span>:</span>
        <span>{{articles.view}}</span>
        <span>标签</span>
        <span>：</span>
        <span>{{articles.tags}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
// import formTime from "../until/formatTime"
export default {
  props: ["list"],
  data() {
    return {
      articleList: [
        {
          id: 22,
          title: "刘宝宝",
          date: "1596013192",
          view: "1314",
          content:
            "文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。文章不写一字空”“积句而成章，积章而成篇”“言出为论，下笔成章”等，都是现在所说的文章的意思。更广义的文章，也包含“学问”“奥秘”等意思，如“洞明世事皆学问，人情练达即文章”就是。",
          tags: "你好,好啊",
        },
      ],
    };
  },
  created() {},
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
        return year + "-" + monts + "-" + day + "-" + hour + ":" + mu;
      };
    },
  },
};
</script>

