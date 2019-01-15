import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/conversations',
            name: 'conversations',
            meta: {
                requireLogin: true
            },
            component: () => import(/* webpackChunkName: "about" */ './views/Conversations.vue'),
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: '/:id',
                    component: () => import(/* webpackChunkName: "about" */ './components/MessageContent'),
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin)) {
        if (!store.state.isLogin) {
            next('/')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router

