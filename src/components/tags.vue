<template>
  <div class="dds">
    <div id="random_tags" class="right-module">
      <div>标签云</div>
      <div>
        <!-- :href="item.link" -->
        <router-link
          tag="a"
          v-for="(item, index) in tags"
          :key="index"
          :style="{color:getRandomColor(),fontSize:randomSize()}"
          style="cursor:pointer"
          :to="{name: 'tagsDetail',query:{tagId:item.id,tag:item.tag}}"
        >{{item.tag}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api"
export default {
  data() {
    return {
      tags: ["uioej", "jsdjk"],
    };
  },
  created() {
    this.$store.dispatch("tagState/getTagRandomAll").then((res) => {
      // console.log(res);
      let result = res.data.data;
      let arr = [];
      for (let i = 0; i < result.length; i++) {
        let temp = {};
        temp.tag = result[i].tag;
        temp.id = result[i].id;
        temp.link = res.data.data[i].tag;
        arr.push(temp);
      }
      this.tags = arr;
      // console.log(this.tags);
    });
    // console.log(this.$route.query.tag)
  //  api.queryTagCountNum({tag:this.$route.query.tag}).then(res=>{
  //    console.log(res.data.data[0].count)
  //  })

  },
  computed: {
    getRandomColor() {
      return function () {
        var r = Math.floor(Math.random() * 255),
          g = Math.floor(Math.random() * 255),
          b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
      };
    },
    randomSize() {
      return function () {
        var size = Math.floor(Math.random() * 40 - 10) + "px";
        return size;
      };
    },
  },
};
</script>

<style scoped>
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
</style>
