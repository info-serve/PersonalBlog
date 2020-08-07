<template>
  <div>
    <div class="wrappersd">
      <div class="titles">PersonalBlog's SiteMap</div>
      <div class="sptions">
        <router-link :to="{ path: '/index' }" tag="span">博客首页</router-link>>>站点地图
      </div>
      <div class="articleList" id="articleLists">
        <span class="tiltes">最新文章</span>
        <ul>
          <router-link
            tag="li"
            class="item_ing"
            :to="{name:'detailBlog',params:{id:item.title,link:item.id}}"
            v-for="(item,index) in list"
            :key="index"
          >
            <div>
              <span style="margin-right:20px">{{index+1}}.</span>
              {{item.title}}
              <span
                style="display:inline-block;margin-left:20px; font-size:13px"
              >{{formTime(item.ctime)}}</span>
            </div>
          </router-link>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  data() {
    return {
      list: [
        { id: 3, title: "时还耐腐蚀", ctime: "2020年5月20日13时14分" },
        { id: 2, title: "腐蚀", ctime: "2020年5月20日13时14分" },
        { id: 1, title: "耐腐蚀", ctime: "2020年5月20日13时14分" },
      ],
    };
  },
  created() {
    api.getBlogAll().then((res) => {
      // console.log(res.data.data);
      this.list = res.data.data
    });
  },
  methods: {},
  computed: {
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
          return year + "年" + monts + "月" + day + " 日" + hour + "时" + mu +"分";
      };
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: #626770;
  box-sizing: border-box;
}
.wrappersd {
  width: 100%;
  background: #f5f5f5;
  text-align: left;
}
.wrappersd .titles {
  width: 100%;
  line-height: 100px;
  font-size: 24px;
  font-weight: 600;
  padding: 0 10px;
  text-align: center;
  margin: 20px auto 0 auto;
  border-bottom: 1px solid #f5f5f5;
}
.wrappersd .sptions {
  width: 100%;
  height: 50px;
  line-height: 50px;
  /* vertical-align: middle; */
  padding-left: 60px;
  margin: 0 auto;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
}
.articleList {
  width: 90%;
  margin: 19px auto;
  padding-left: 15px;
  border: 1px solid #f5f5f5;
}
.articleList .tiltes {
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid #f5f5f5;
}
.articleList ul .item_ing {
  margin: 10px 0;
  height: 30px;
  width: 100%;
  padding-left: 15px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: 2px solid #fff;
}
.articleList ul .item_ing > div {
  font-weight: 600;
}
.articleList ul .item_ing:hover a {
  color: #f40;
}
.articleList ul .item_ing:last-of-type {
  border: 0;
}
.articleList ul .item_ing > a {
  color: #233;
  font-weight: 500;
}
</style>
