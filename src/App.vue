<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style >

.everyday {
  /* position: relative; */
  width: 100%;
  text-align: center;
  border-radius: 10px;
  background-color: #fff;
  padding: 15px 20px;
  box-shadow: 3px 4px 3px #eee;
  box-sizing: border-box;
  color: #888;
}

.everyday .gg span {
  display: inline-block;
  width: 300px;
  height: 50px;
  border: 1px solid;
}
.everyday span h3 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #090cd4;
  text-align: left;
}
.everyday .mv h6 {
  float: right;
  margin-top: -30px;
  cursor: pointer;
}

.everyday p {
  font-size: 16px;
  text-indent: 0.5rem;
  text-align: left;
  word-break: break-all;
  word-wrap: break-word;
}
.article_list {
  width: 100%;
  border-radius: 10px;
}
.article {
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 1px 3px 2px #888;
  overflow: hidden;
  text-align: left;
}
.article .article_content {
  padding: 10px 10px 10px 25px;
  font-size: 14px;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  color: #13202b;
}
.article_title {
  display: inline-block;
  width: 100%;
  height: 35px;
  font-size: 18px;
  line-height: 35px;
  padding: 0 15px;
  text-align: left;
  border-bottom: 2px dashed #fee;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
}
.article_title:hover {
  color: #f03131;
  cursor: pointer;
}
.tags-ing,
.article_title,
.right-module > ul > .items,
.right-module > ul > .items > p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.article_footer {
  width: 100%;
  height: 20px;

  cursor: pointer;
  padding: 10px;
  color: #213;
  border-top: 1px dashed #fee;
  background-color: #fff;
}
.article_footer span {
  display: inline-block;
  padding: 0px 3px;
}
.article_footer .items {
  display: inline-block;
  margin-right: 5px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
}
.article_footer .tags-ing {
  text-align: left;
  width: 260px;
}

.wrappers {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.wrappers .cont {
  /* position:absolute; */
  width: 900px;
  height: 800px;
  margin: 100px auto;
  background-color: #fff;
  color: #888;
  box-sizing: border-box;
  border-radius: 15px;
}

.wrappers .cont .scoll {
  width: 100%;
  height: 85%;
  overflow-y: scroll;
}

.wrappers .cont .scoll::-webkit-scrollbar {
  width: 1px;
  height: 100%;
  background-color: #ffffff;
}

.wrappers .cont .top {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  font-size: 700;
  border-bottom: 2px solid #888;
  /* border: 1px solid; */
}

.wrappers .cont .top span {
  float: right;
  margin: 0 20px;
  cursor: pointer;
}

.wrappers .cont .top span::after {
  content: "";
  display: block;
  clear: both;
}

.wrappers .cont .scoll ul {
  margin-top: 15px;
}

.wrappers .cont .scoll ul > li {
  width: 90%;
  background-color: #e9eff3;
  /* border: 1px solid #000; */
  box-sizing: border-box;
  margin: 0px auto 10px auto;
  border-radius: 5px;
  text-align: left;
}

.wrappers .cont .scoll ul > li > div {
  padding: 5px;
}

.wrappers .cont .scoll ul > li > .time_ing {
  color: #f40;
  border-bottom: 1px solid #faf9f9;
}

.wrappers .cont .scoll ul > li > .time_ing > span {
  display: inline-block;
  padding: 0 5px;
}

.wrappers .cont .scoll ul > li > .content_data {
  width: 100%;
  word-wrap: break-word;
  word-break: break-all;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
body,
html {
  font-size: 16px;
  /* color: rgb(243, 36, 36); */
  text-align: center;
  width: 100%;
  background-color: #eee;
  overflow-x: hidden;
}
div {
  display: block;
}
.header {
  overflow: hidden;
}
.contents {
  width: 100%;
  background-color: #ddd;
  border-bottom: 2px solid #f38e96;

  box-sizing: border-box;
}
.header .contents .container {
  position: relative;
  margin: 0 auto;
  max-width: 1190px;
  height: 50px;
  background-color: #ddd;
  /* border: 1px solid; */
}
.title {
  /* display: inline-block; */
  float: left;
  line-height: 50px;
  color: #000;
}
.dd {
  margin: 0 25px;
}
.login {
  font-size: 14px;
  padding: 0 10px;
}
.asd::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 46px;
  display: inline-block;
  margin-top: -10px;
  height: 20px;
  width: 2px;
  background-color: #eee;
}
.login:hover {
  color: #f40;
}
.center > .item {
  /* display: inline-block; */
  float: left;
  width: 70px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
a {
  color: #012;
}
.center > li:hover {
  background-color: #8ca4f3;
}

.search > input,
.search > .btn {
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 90px;
  height: 30px;
  margin-top: -15px;
  outline: none;
}

.search > input {
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-left: 15px;
  border: 1px solid #746beb;
  box-sizing: border-box;
}
.search > .btn {
  right: 30px;
  width: 60px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  cursor: pointer;
  background-color: #746beb;
  color: #fff;
  border: 0;
  padding: 5px 0;
}
.search > .btn:hover {
  background-color: #62745d;
}
.contents .container::after,
.center::after,
.search::after {
  content: "";
  display: table;
  clear: both;
}
.content {
  display: inline-block;
  position: relative;
  width: 1190px;
  margin: 30px auto 0px auto;
  /* background-color: #daf; */
}
.content_left {
  float: left;
  width: 66%;
  padding: 0 20px 0 0;
  box-sizing: border-box;
  /* border: solid rgb(114, 17, 17); */
}
.description {
  width: 96%;
  background-color: #fff;
  padding: 10px 15px 20px 15px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px #888;
}
.myAbout {
  width: 95%;
  font-size: 20px;
  font-weight: 700;
  color: #232;
  text-align: left;
  padding: 10px 20px;
  margin: 20px 0 20px 0;
  border-bottom: 1px solid #ccc;
}
.description .msg p {
  margin: 5px;
  padding: 0 0 0 10px;
  text-align: left;
}
.blog_comments {
  width: 100%;
  /* background-color: #fff; */
  color: #000;
}
.blog_msgs {
  margin-top: 20px;
  padding: 10px;
  display: inline-block;
  width: 100%;
  text-align: left;
}
.blog_comment {
  width: 95%;
  background-color: #d9edf7;
  border: 1px dashed #7ea4c1;
  padding: 10px 10px 20px 10px;
  margin-top: 10px;
  text-align: left;
}
.blog_comment > span {
  display: inline-block;
  width: 100%;
  padding: 10px;
  color: #4462e4;
}
.blog_comment > span > .we {
  color: #888;
}
.blog_comment > .reCentent {
  width: 100%;
  padding-left: 10px;
  margin: 5px 0;
  cursor: pointer;
}
.content_right {
  float: right;
  width: 34%;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
  /* border: solid #000; */
}
.right-module {
  display: inline-block;
  width: 100%;
  background-color: #fff;
  color: #254;
  border-radius: 5px;
  text-align: left;
  padding: 10px 15px 15px 15px;
  margin-bottom: 20px;
}
.right-module div {
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 5px;
  /* border-bottom: 1px solid #f5f5f5; */
}
.right-module div a {
  word-break: break-all;
  word-wrap: break-word;
  padding: 6px;
}
.right-module > ul > .items:hover a {
  color: #f38e96;
}
.right-module > ul > .items {
  /* position: relative; */
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
}
.right-module > ul > .items:last-of-type {
  border: 0;
}
.right-module > div.name_id {
  position: relative;
  padding: 5px 0;
}
.right-module ul .items .name_id span,
.right-module ul .items .date_time {
  font-size: 14px;
  color: #7c8185;
}
.right-module > ul > .items > p {
  width: 100%;
  font-size: 14px;
  color: #233;
}
.time_date {
  position: absolute;
  right: 15px;
  /* top: 0; */
}
.right-module ul .items .date_time {
  float: right;
  margin-top: -20px;
}
.right-module ul .items .date_time::after,
.content_left::after {
  content: "";
  display: block;
  clear: both;
}

.page_tool {
  margin-top: 15px;
}
.page_tool ul .items {
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: #fff;
  color: #000;
  margin: 0 5px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.page_tool ul .items.active {
  background-color: #4699e6;
  color: #fff;
}
.page_tool ul .items:hover {
  background-color: #0452f8;
  color: #fff;
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
[class*="el-col-"] {
  /* float: left; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
