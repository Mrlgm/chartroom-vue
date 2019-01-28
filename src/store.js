import Vue from 'vue'
import Vuex from 'vuex'
import AV from './helper/leanCloud'
import {TextMessage} from 'leancloud-realtime'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        isLogin: false,
        imClient: null,
        currentConversation: null,
        currentConversationId: '',
        realtime: AV.realtime
    },
    getters: {
        checkLogin() {
            let currentUser = AV.User.current();
            return !!currentUser
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setIsLogin(state, payload) {
            state.isLogin = payload
        },
        setImClient(state, payload) {
            state.imClient = payload
        },
        setCurrentConversationId(state, payload) {
            state.currentConversationId = payload
        },
        setCurrentConversation(state, payload) {
            state.currentConversation = payload
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
        async findChatRoom({commit, state}) {
            let user = AV.User.current();
            return await state.realtime.createIMClient(user)
                .then((client) => {
                    client.getChatRoomQuery()
                        .equalTo('name', '聊天室')
                        .find()
                        .then((chatRooms) => {
                            commit('setCurrentConversationId', chatRooms[0].id)
                            return chatRooms[0].join()
                        })
                        .then((conversation) => {
                            commit('setCurrentConversation', conversation)
                        })
                        .catch(console.error.bind(console));
                })

        },
        async sendMessage({commit, state}, data) {
            return await state.currentConversation.send(new TextMessage(data))
        },
        checkLogin({commit, state}) {
            if (state.isLogin) {
                return true
            } else {
                let currentUser = AV.User.current();
                if (currentUser) {
                    commit('setUser', currentUser.toJSON());
                    commit('setIsLogin', true);
                    return true
                } else {
                    return false;
                }
            }
        }
    }
})
