<template>
  <div class="content">
    <div class="content_left">
      <div class="description">
        <div class="msg">
          <p style="color: #f40;">
            人生最美好的是相遇，我一生最奢侈的事，就是途中与你相遇，然后相濡以沫，共闻花香。
            有生之年，只诉温暖不言殇，倾心相遇，安暖相陪。
          </p>
          <p>
            <strong>生命那么短，世界那么乱，我不想争吵，不想冷战，不愿和你有一秒遗憾。</strong>
          </p>
        </div>
      </div>
      <div class="blog_comments" id="blogComments" v-if="isShowComment">
        <span class="blog_msgs">共有{{blogIdCommentNum}}条评论</span>
        <div class="blog_comment" v-for="(item,index) in blogIdCommentList" :key="index">
          <span>
            <b class="we">{{item.userName}}</b>
            ：{{item.options}} {{formTime(item.ctime) }}
            <!-- <a
              style="cursor: pointer"
              @click="replying(item.id, item.userName)"
            >[回复]</a> -->
          </span>
          <div class="reCentent">{{item.commets}}</div>
        </div>
      </div>
      <div class="send">
        <div class="send_comment" id="send_comment">
          <span>发表评论</span>
          <div>
            <input type="hidden" id="comment_reply" value="-1" ref="reply" />
            <input type="hidden" id="comment_reply_name" value="0" ref="replyName" />
            <input type="text" placeholder="昵称" id="comment_name" v-model="userNames" maxlength="6"/>
            <input
              type="text"
              placeholder="邮箱（评论被回复时你能收到通知）"
              id="comment_email"
              v-model="userEmail"
            />
          </div>
          <div>
            <textarea placeholder="无意义的内容我可能不会回复你" id="comment_content" v-model="userContent"></textarea>
          </div>
          <div>
            <input type="text" placeholder="验证码" id="comment_code" ref="rightCode" />
            <span v-html="dataHtml" @click="changeCode()"></span>
          </div>
          <div @click="sendComment()" id="btn">提交评论</div>
        </div>
      </div>
    </div>

    <div class="content_right">
      <tags></tags>
      <hot></hot>
      <comments></comments>
    </div>
  </div>
</template>

<script>
import tags from "./tags";
import hot from "./hot";
import comments from "./commentNew";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      bid: -2,
      userEmail: "",
      userNames: "",
      userContent: "",
      // comments:[{userName:'ejkw',ctime:'893489',commets:'hjsndjskd'}]
    };
  },
  created() {
        this.$store
      .dispatch("newCommenting/getBlogIdBycommentList", {
        blog_id: this.bid,
      })
      .then((res) => {
        // console.log(res.data.data);
        let comments = res.data.data
        // for (let i = 0; i < this.comments.length; i++) {
        //    if(this.comments[i].parent >-1){
        //     //  console.log("这是回复")
        //      this.comments[i].options = "回复@" + this.comments[i].parentName
        //    }
        // }
        // this.$store.commit("newCommenting/setBlogIdCommentList", comments);

      });

    this.$store.dispatch("newCommenting/getRandomCodes");
  },
  methods: {
    sendComment() {
      if (this.$refs.rightCode.value !== this.textCode) {
        alert("验证码错误");
      } else {
        if (!this.userEmail || /^\s+$/gi.test(this.userEmail)) {
          alert("邮箱地址不能为空");
        } else if (!this.userNames || /^\s+$/gi.test(this.userNames)) {
          alert("用户名不能为空 / 空格");
        } else if (!this.userContent || /^\s+$/gi.test(this.userContent)) {
          alert("评论内容不能为空 / 空格");
        } else {
          this.$store.dispatch("newCommenting/postSendComment", {
            bid: this.bid,
            parent: this.$refs.reply.value,
            parentName: this.$refs.replyName.value,
            userName: this.userNames.trim(),
            commets: this.userContent.trim(),
            email: this.userEmail.trim(),
          });
          this.userNames = "";
          this.userContent = "";
          this.userEmail = "";
          this.$refs.rightCode.value = "";
            this.$store.dispatch("newCommenting/getBlogIdBycommentList", {
            blog_id: this.bid,
          }).then(res=>{
            this.$nextTick(()=>{
              this.$store.commit("newCommenting/setBlogIdCommentList",res.data.data)
            })
          }); //评论成功调用刷新
        }
      }
    },
    changeCode() {
      this.$store.dispatch("newCommenting/getRandomCodes");
    },
    // replying(commentId, userName) {
    //   console.log(commentId, userName);
    //   this.$refs.reply.value = commentId;
    //   this.$refs.replyName.value = userName;
    //   location.href = "#blogComments";
    // },
  },
  computed: {
    ...mapState("newCommenting", ["dataHtml", "textCode"]),
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
        return year + "年" + monts + "月" + day + "日" + " " + hour + ":" + mu;
      };
    },
  },
  components: {
    hot,
    tags,
    comments,
  },
};
</script>

<style>
</style>
