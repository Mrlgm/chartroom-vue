import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

Vue.filter('formatTime', (time) => {
    //2019/1/12 17:53
    let date = new Date(time)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    if(minute<10){
        minute = '0'+ `${minute}`
    }
    if(second<10){
        second = '0'+ `${second}`
    }
    return `${year}/${month}/${day} ${hour}:${minute}:${second}`
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

