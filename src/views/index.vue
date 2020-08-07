<template>
  <div class="index">
     <el-row>
         <el-col>
               <contents></contents>
         </el-col>

     </el-row>
  </div>
</template>

<script>
import contents from "../components/content";
export default {
  components: {
    contents,
  },
};
</script>

<style>
.index {
  /* overflow: hidden; */
}
.el-col-24{
  overflow: hidden;
}
</style>
