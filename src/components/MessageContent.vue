<template>
    <div id="messageContent" class="message_content">
        <div class="message_list" >
            <ul class="messages" v-chat-scroll>
                <li v-for="item in messageList" :class="[item.from === user.objectId ? activeClass : '']">
                    <div class="time">
                        <span>{{item.timestamp | formatTime}}</span>
                    </div>
                    <div class="from">
                        <img src="../assets/logo.png" alt="">
                        <div class="content">{{item.text}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    import {Event, TextMessage} from 'leancloud-realtime'
    import AV from 'leancloud-storage'
    import Bus from '../helper/bus'
    import Vue from 'vue'
    import VueChatScroll from 'vue-chat-scroll'
    Vue.use(VueChatScroll)

    export default {
        name: "MessageContent",
        data() {
            return {
                messageList: [],
                activeClass: 'self_send',
            }
        },
        created() {
            this.setCurrentConversationId(this.$route.params.id)
            let currentUser = AV.User.current();
            this.realtime.createIMClient(currentUser)
                .then((user) => {
                    user.getConversation(this.$route.params.id).then((conversation) => {
                        // 设置当前对话
                        Bus.$emit('setTitle',conversation._attributes.name)
                        this.setCurrentConversation(conversation)
                        conversation.queryMessages({
                            limit: 100, // limit 取值范围 1~1000，默认 20
                        }).then((messages) => {
                            // 最新的100条消息，按时间增序排列
                            this.messageList = messages
                        }).catch(console.error.bind(console));
                    }).catch(console.error.bind(console));
                    //监听消息
                    user.on(Event.MESSAGE, (message, conversation) => {
                        console.log('[Bob] received a message from [' + message.from + ']: ' + message.text);
                        // 收到消息之后一般的做法是做 UI 展现，示例代码在此处做消息回复，仅为了演示收到消息之后的操作，仅供参考。
                        this.messageList.push(message)
                    });
                })
            Bus.$on('sendSuccess', (message) => {
                this.messageList.push(message)
            })

        },
        computed: {
            ...mapState(['realtime', 'user', 'currentConversationId'])
        },
        methods: {
            ...mapMutations(['setCurrentConversation','setCurrentConversationId'])
        }
    }
</script>

<style lang="scss" scoped>
    .message_content {

        height: 100%;
        display: flex;
        justify-content: center;

        .message_list {
            width: 100%;
            padding: 0 100px;
            .messages{
                height: 100%;
                overflow: auto;
            }

            li {
                list-style: none;

                .time {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;

                }

                .from {
                    display: flex;
                    align-items: center;

                    img {
                        height: 30px;
                        margin: 20px;
                        border-radius: 4px;
                    }

                    .content {
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        padding: 10px;
                    }
                }

                &.self_send {
                    .from {
                        display: flex;
                        justify-content: flex-end;

                        img {
                            order: 1;
                        }

                        .content {
                            order: -1;
                        }
                    }

                }
            }
        }
    }
</style>