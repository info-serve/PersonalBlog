<template>
  <div class="content">
    <div class="content_left">
      <div class="description">
        <div class="myAbout">关于我</div>
        <div class="msg">
          <p>Baby Liu, a person with ideals, responsibilities and beliefs</p>
        </div>
        <div class="myAbout">关于博客</div>
        <div class="msg">
          <p>
            <strong>BlogDevelopmentTime:&nbsp;&nbsp;</strong>April 2020
          </p>
          <p>
            <strong>PersonalEmail:&nbsp;&nbsp;</strong>liusy.gx@aliyun.com
          </p>
        </div>
      </div>
      <commentsList></commentsList>
      <div class="send">
        <div class="send_comment" id="send_comment">
          <span>发表评论</span>
          <div>
            <input type="hidden" id="comment_reply" value="-1" ref="reply" />
            <input type="hidden" id="comment_reply_name" value="0" ref="replyName" />
            <input type="text" placeholder="昵称" id="comment_name" v-model="userNames" />
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
            <input type="text" placeholder="验证码" id="comment_code" ref="rightCode" maxlength="6"/>
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
import commentsList from "./commentList";
import tags from "./tags";
import hot from "./hot";
import comments from "./commentNew";
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
        // console.log(res)
        //  if(res.data.data =="")return
        let result = [res.data.data];
        //  for(let i = 0 ; i<result.length;i++){
        //    if(result[i].parent > -1){
        //       result[i].options = "@回复" + result[i].parentName;
        //    }
        //  }
        //  console.log(result)
        this.$store.commit("newCommenting/setBlogIdCommentList", result);
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
          this.$store
            .dispatch("newCommenting/getBlogIdBycommentList", {
              blog_id: this.bid,
            })
            .then((res) => {
              this.$nextTick(() => {
                this.$store.commit(
                  "newCommenting/setBlogIdCommentList",
                  res.data.data
                );
              });
            }); //评论成功调用刷新
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
  components: { commentsList, hot, tags, comments },
};
</script>

<style>
</style>
