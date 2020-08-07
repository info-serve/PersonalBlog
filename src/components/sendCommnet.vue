<template>
  <div class="send">
    <div class="send_comment" id="send_comment">
      <span>发表评论</span>
      <div>
        <input type="hidden" id="comment_reply" value="-1" ref="reply" />
        <input type="hidden" id="comment_reply_name" value="0" ref="replyName" />
        <input type="text" placeholder="昵称" id="comment_name" v-model="userNames" />
        <input type="text" placeholder="邮箱（评论被回复时你能收到通知）" id="comment_email" v-model="userEmail" />
      </div>
      <div>
        <textarea placeholder="无意义的内容我可能不会回复你" id="comment_content" v-model="userContent"></textarea>
      </div>
      <div>
        <input type="text" placeholder="验证码" id="comment_code" ref="rightCode" maxlength="6"/>
        <span v-html="dataHtml" @click="changeCode()"></span>
      </div>
      <div @click="sendComment()" id="btn">提交评论</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      num: 6,
      commentList: [],
      userEmail: "",
      userNames: "",
      userContent: "",
    };
  },
  created() {
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
            bid: this.$route.params.link,
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
          // this.$store.dispatch("newCommenting/getBlogIdBycommentList", {
          //   blog_id: this.$route.params.link,
          // }).then(res=>{
          //   this.$store.commit("newCommenting/setBlogIdCommentList", res.data.data)
          // });

            window.location.reload()
          //评论成功调用刷新
        }
      }
    },
    changeCode() {
      this.$store.dispatch("newCommenting/getRandomCodes");
    },
  },
  computed: {
    ...mapState("newCommenting", ["dataHtml", "textCode"]),
  },
};
</script>

<style>
</style>
