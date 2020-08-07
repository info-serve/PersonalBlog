import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect:'/index/mainPage',
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import("@/components/about")
        }, {
          path: '/leaveMessage',
          name: 'leaveMessage',
          component: () => import("@/components/leaveMessage")
        }, {
          path: '/index/mainPage',
          name: 'index',
          component: () => import("@/views/index"),
        },
        {
          name:'detailBlog',
          path:'/detailBlog/detail_blog/sys/:id/:link',
          component:()=>import("@/components/Blogdetail"),
        },
        {
          name:'char',
          path:'/char',
          component:()=>import("@/components/char")
        }, {
          path: '/tagsDetail/tagContent/syr',
          name: 'tagsDetail',
          component: () => import("@/components/tagsDetail")
        }
      ]
    }, {
      path: '/login',
      meta: {
        name: 'login',
        ids: 95
      },
      name: 'login',
      component: () => import("@/components/login"),
      // beforeEnter: (to, from, next) => {
      //   alert("暂未支持登录")
      // }
    }, {
      path: '/register',
      name: 'register',
      meta: {
        name: 'login',
        ids: 95
      },
      component: () => import("@/components/register"),
      // beforeEnter: (to, from, next) => {
      //   alert("暂未支持注册")
      // }
    }, {
      path: '/map/mapArticle',
      name: 'mapArticle',
      component: () => import("@/components/mapArticle")
    }
  ]
})
