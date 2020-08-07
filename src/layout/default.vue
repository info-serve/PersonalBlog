<template>
  <div class="default">
    <el-container>
      <el-header height="null">
        <headers />
      </el-header>
        <el-main style="padding:0px">
          <router-view></router-view>
        </el-main>
      </el-container>

      <el-footer height=null>
          <p> copyRight&nbsp;©&nbsp;2020 && LiuBaoBao</p>
          <p><strong>邮箱地址&nbsp;:</strong>&nbsp;&nbsp;
          <a href="mailto:liusy.gx@aliyun.com" title="点击发送">personalBlog</a></p>
         </el-footer>
  </div>
</template>

<script>
import headers from "../components/headeing";

export default {
  components: {
    headers,

  },
};
</script>

<style>
.el-main{
  overflow: hidden;

}
.default{
  overflow: hidden;
}
.el-header {
  padding: 0;
}
.el-footer{
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  margin-top:120px;
  min-width: 500px;
}
p{
  padding: 5px 0;
}
</style>
