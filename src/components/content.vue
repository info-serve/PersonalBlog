<template>
  <div>
    <div class="content">
      <div class="content_left">
        <everyday></everyday>
        <actliceList :list="blogList"></actliceList>
        <page></page>
      </div>
      <div class="content_right">
        <tags></tags>
        <hot></hot>
        <comments></comments>
      </div>
    </div>
  </div>
</template>

<script>
import everyday from "./everydayOne";
import actliceList from "./actaliceList";
import tags from "./tags";
import hot from "./hot";
import comments from "./commentNew";
import page from "./turnPage";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  methods: {},
  computed: {
    ...mapState("blogBypageing", {
      blogList: function (state) {
        if (state.blogList == "") {
          return [
            {
              id: 22,
              title: "无数据",
              date: "1596013192",
              view: "1314",
              content: "暂无数据",
              tags: "无数据",
            },
          ];
        } else {
          return state.blogList;
        }
      },
    }),
  },
  methods: {},
  components: {
    everyday,
    actliceList,
    page,
    hot,
    tags,
    comments,
  },
};
</script>

<style>
</style>
