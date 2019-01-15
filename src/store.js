import Vue from 'vue'
import Vuex from 'vuex'
import AV from './helper/leanCloud'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isLogin: false,
        imClient: null,
    },
    getters:{
        checkLogin(){
            let currentUser =  AV.User.current();
            return !!currentUser
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setIsLogin(state,payload){
            state.isLogin = payload
        }
    },
    actions: {
        async login({commit}, data) {
            commit('setIsLogin', true);
            return await AV.User.logIn(data.username, data.password)
        },
        async signUp({commit}, data) {
            return await AV.User.signUp(data.username, data.password)
        },
        async logout({commit, state}) {
            return await AV.User.logOut()
            //return await state.imClient.close()
        },
        checkLogin({commit, state}) {
            if(state.isLogin){
                return true
            }else{
                let currentUser =  AV.User.current();
                console.log(currentUser)
                if (currentUser) {
                    commit('setUser', currentUser.toJSON());
                    commit('setIsLogin', true);
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
})
