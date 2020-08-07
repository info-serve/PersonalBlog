<template>
  <div>
    <div class="content">
      <div class="content_left">
        <div class="blog" id="blog_detail" v-show="show">
          <div class="blog_title">{{title}}</div>
          <div class="blog_msg">
            作者：刘宝宝
            <div>标签：{{tags}}</div>
            <div>发布于：{{formTime(ctime)}}</div>
            <div>阅读: {{view}}</div>
            <div>博客ID: {{id}}</div>
          </div>
          <div class="blog_content">{{content}}</div>
        </div>

        <div class="blog_comments" v-if="isShowComment">
          <span class="blog_comments_msg">当前文章：{{blogIdCommentNum}} 条留言</span>
          <div class="scoll">
            <div class="blog_comment" v-for="(comment,index) in blogIdCommentList" :key="index">
              <span>
                <b>{{comment.userName}}</b>
                ：{{comment.options}} {{ formTime(comment.ctime)}}
                <!-- <a
                  style="cursor: pointer"
                  @click="replying(comment.id, comment.userName)"
                >[回复]</a>-->
              </span>
              <div>{{comment.commets}}</div>
            </div>
          </div>
        </div>
        <sendComment></sendComment>
      </div>
      <div class="content_right">
        <!-- <tags></tags> -->
        <!-- <hot></hot> -->
        <!-- <comments></comments> -->
      </div>
    </div>
  </div>
</template>
<script>
import tags from "./tags";
import hot from "./hot";
import comments from "./commentNew";
import sendComment from "./sendCommnet";
import { mapState, mapActions, mapMutations } from "vuex";
import api from "../api/api";
export default {
  data() {
    return {
      show: false,
      id: 838938,
      title: "暂时数据，请期待",
      content: "暂时数据，请期待",
      view: 3,
      tags: "暂时数据，请期待",
      ctime: "2020-05-20",
    };
  },
  components: {
    hot,
    tags,
    comments,
    sendComment,
  },
  created() {
    const id = this.$route.params.link;
    this.$store
      .dispatch("blogBypageing/getBlogListById", {
        id: id,
      })
      .then((res) => {
        let result = [res.data.data[0]];
        if (result == "") {
          this.show = false;
        } else {
          result.forEach((ele, index) => {
            this.id = ele.id;
            this.title = ele.title;
            this.content = ele.content;
            this.view = ele.view;
            this.tags = ele.tags;
            this.ctime = ele.ctime;
          });
          this.show = true;
        }
      });
    this.$store
      .dispatch("newCommenting/getBlogIdBycommentList", {
        blog_id: this.$route.params.link,
      })
      .then((res) => {
        // console.log(res)
        this.$nextTick(() => {
          this.$store.commit(
            "newCommenting/setBlogIdCommentList",
            res.data.data
          );
        });
      });


  },
  methods: {
    // replying(commentId, userName) {
    //   console.log(commentId);
    //   console.log(userName);
    // },
  },
  computed: {
    ...mapState("blogBypageing", ["blogDetailList"]),
    ...mapState("newCommenting", {
      isShowComment: function (state) {
        return state.isShowComment;
      },
      blogIdCommentNum: function (state) {
        return state.blogIdCommentNum;
      },
      blogIdCommentList: function (state) {
        if (state.blogIdCommentList == "") {
            return "未有评论"
        }else{
          return state.blogIdCommentList
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
        return year + "年" + monts + "月" + day + "日" + " " + hour + ":" + mu;
      };
    },
  },
};
</script>
















































<style scoped>
.blog {
  background: white;
  width: 96%;
  border-radius: 5px;
  padding: 10px 15px;
  box-shadow: 3px 4px 3px #888888;
  text-align: left;
}

.blog_title {
  font-size: 24px;
  font-weight: 600;
}

.blog_msg {
  padding-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  box-sizing: border-box;
}
.blog_content {
  padding: 0px 10px 20px 10px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}

.send_comment {
  background: #f5f5f5;
  width: 96%;
  border-radius: 5px;
  padding: 10px 15px;
  box-shadow: 3px 4px 3px #888888;
  text-align: left;
  margin-top: 50px;
}

.send_comment input {
  width: 300px;
  height: 34px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
}

.send_comment textarea {
  width: 90%;
  height: 100px;
  border: 1px solid #cccccc;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  border-radius: 5px;
}

.send_comment #btn {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
}

.send_comment #btn:hover {
  background: #47e27b;
}

.blog_comments {
  width: 100%;
}

.blog_comments_msg {
  margin-top: 20px;
  padding: 10px;
  display: inline-block;
  width: 100%;
  text-align: left;
}

.blog_comment {
  width: 95%;
  background: #d9edf7;
  border: 1px dashed #7ca4c1;
  padding: 10px 10px 20px 10px;
  margin-top: 10px;
  color: #31708f;
  text-align: left;
}

.blog_comment span {
  display: inline-block;
  width: 100%;
  padding-left: 10px;
}

.blog_comment div {
  display: inline-block;
  width: 100%;
  padding-left: 10px;
  margin-top: 10px;
}
#send_comment div span {
  cursor: pointer;
}
/* #blog_comments { */
/* height: 500px; */
/* } */
#blog_comments .scoll {
  width: 100%;
  height: 85%;
  overflow-y: scroll;
}
#blog_comments .scoll::-webkit-scrollbar {
  width: 1px;
  height: 100%;
  /* background-color: #ffffff; */
}
</style>
