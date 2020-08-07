<template>
  <div class="hot">
    <div class="right-module" id="hotTa">
      <div>最近热门</div>
      <ul>
        <router-link
          tag="li"
          class="items"
          v-for="(items, index) in hotList"
          :key="index"
          :to="{name:'detailBlog',params:{id:items.title,link:items.id}}"
        >{{ items.title }}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      size: 5,
      hotList: [
        { id: 5, title: "PHP", link: 123 },
        { id: 6, title: "PY", link: 1234 },
        { id: 1, title: "CSS", link: 1235 },
        { id: 3, title: "HTML", link: 1237 },
      ],
    };
  },
  created() {
    return api.getBlogHot({ size: this.size }).then((res) => {
      this.hotList = res.data.data;
    });
  },
};
</script>

<style>
</style>
