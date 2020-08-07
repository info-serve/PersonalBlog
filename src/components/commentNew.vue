<template>
  <div class="comm">
    <div class="right-module" id="comments">
      <div>最近评论</div>
      <ul>
        <li class="items" v-for="(item, index) in newCommets" :key="index">
          <div class="name_id">
            <span class="userNmae">{{item.userName}}</span>
            <span class="time_date">{{ formTime(item.ctime) }}</span>
          </div>
          <router-link
            tag="p"
            @click="comt(item.blog_id)"
            :to="{name:'detailBlog',params:{id:item.userName,link:item.blog_id}}"
            :title="'博客ID:'+item.blog_id"
          >{{item.commets}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      commentList: [
        {
          userName: "刘宝宝",
          ctime: "1596013192",
          commets: "本系统暂未完善",
          link: 7447,
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("newCommenting/getNewCommentsList");
  },
  methods: {
    comt(id) {
      // console.log(id)
      this.$store.dispatch("blogBypageing/getBlogListById", {
        id: id,
      });
    },
  },
  computed: {
    ...mapState("newCommenting", {
      newCommets: function (state) {
        if (state.newCommets == "") {
          return [
            {
              userName: "系统提示",
              ctime: "1596013192",
              commets: "数据库无法查询评论",
              blog_id: 28989280,
            },
          ];
        } else {
          return state.newCommets;
        }
      },
    }),
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
        return year + "-" + monts + "-" + day + " " + hour + ":" + mu;
      };
    },
  },
};
</script>

<style>
</style>
