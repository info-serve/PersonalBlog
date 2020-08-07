<template>
  <div>
    <div class="blog_comments" v-if="isShowComment">
      <span class="blog_msgs">共有{{blogIdCommentNum}}条评论</span>
      <div class="blog_comment" v-for="(item,index) in blogIdCommentList" :key="index">
        <span>
          <b class="we">{{item.userName}}</b>
          ：{{item.options}} {{ formTime(item.ctime)}}
          <!-- <a
            style="cursor: pointer"
            @click="replying(item.id, item.userName)"
          >[回复]</a>-->
        </span>
        <div class="reCentent">{{item.commets}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      bid: -1,
      userEmail: "",
      userNames: "",
      userContent: "",
    };
  },
  created() {
    this.$store
      .dispatch("newCommenting/getBlogIdBycommentList", {
        blog_id: this.bid,
      })
      .then((res) => {
          this.$store.commit("newCommenting/setBlogIdCommentList", res.data.data)
      });
  },
  methods: {
    //   replying(id, userName) {
    //   //  console.log(this.$store.state.newCommenting.reply)
    //   this.$store.commit("newCommenting/setReply",id);
    //   this.$store.commit("newCommenting/setReplyName",userName);
    // location.href=""
    //   },
  },
  computed: {
    ...mapState("blogBypageing", ["blogDetailList"]),
    ...mapState("newCommenting", [
      "isShowComment",
      "blogIdCommentNum",
      "blogIdCommentList",
    ]),
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
