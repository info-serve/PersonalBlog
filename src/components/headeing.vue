<template>
  <div class="heade_ing">
    <div class="contents">
      <div class="container">
        <!-- <span>
          <router-link
            :to="{ path: '/login' }"
            tag="a"
            target="_blank"
            class="title login asd"
            @click="hadle()"
          >登录</router-link>
        </span>
        <span>
          <router-link
            :to="{ path: '/register' }"
            tag="a"
            target="_blank"
            class="title login"
            @click="hadle()"
          >免费注册</router-link>
        </span> -->
        <span class="title dd" href="javascript:void(0);" style="font-weight:600;font-size:20px">博客</span>
        <ul class="center">
          <li class="item">
            <router-link :to="{ name: 'index' }" tag="div" >首页</router-link>
          </li>
          <li class="item">
            <router-link :to="{ name: 'mapArticle' }" tag="div" >地图</router-link>
          </li>
          <li class="item">
            <router-link :to="{ path: '/about' }" tag="div" >关于</router-link>
          </li>
          <li class="item">
            <router-link :to="{ path: '/leaveMessage' }" tag="div" >留言</router-link>
          </li>
          <li class="item">
            <router-link :to="{name:'char'}" tag="div">聊天机器人</router-link>
          </li>
        </ul>
        <!-- <div class="search"> -->
          <!-- <input type="text" placeholder="输入关键词" />
          <button class="btn">搜索</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heades",
  data() {
    return {
      msg: "",
    };
  },
  methods: {

  },
};
</script>


<style scoped>
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
.heade_ing {
  overflow: hidden;
  min-width: 500px;
}
.contents {
  width: 100%;
  background-color: #ddd;
  border-bottom: 2px solid #f38e96;

  box-sizing: border-box;
}
.heade_ing .contents .container {
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
  margin: 0 5px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
a {
  display: inline-block;
  width: 100%;
  height: 100% ;
  color: #012;
}
.router-link-exact-active{
  background: #7588f5;
  color: #fff;
}
.center > li:hover {
  background-color: #8ca4f3;
  color: #fee;
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
</style>
