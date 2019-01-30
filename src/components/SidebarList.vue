<template>
    <div class="side_list">
        <div class="title">
            <h1>小明聊天室</h1>
        </div>
        <div class="message_list">
            <Card title="聊天室" :padding="0" shadow style="width: 300px;">
                <CellGroup>
                    <Cell name="chartRoom" to="/conversations/5c3e8d989f5454006bf853d8"
                          :selected="true" title="广场"
                          label="sss"/>
                </CellGroup>
            </Card>
            <Card title="单聊" icon="ios-person" :padding="0" shadow style="width: 300px;">
                <CellGroup @on-click="a" class="box">
                    <Cell name="11" title="Only show titles" label="sss"/>
                    <Cell name="22" title="Only show titles"/>
                    <Cell name="33" title="Only show titles"/>
                    <Cell name="44" title="Only show titles"/>
                    <Cell name="55" title="Only show titles"/>
                    <Cell title="With Badge">
                        <Badge :count="10" slot="extra"/>
                    </Cell>
                </CellGroup>
            </Card>
            <Card title="群聊" icon="ios-people" :padding="0" shadow style="width: 300px;">
                <CellGroup class="box" @on-click="a">
                    <Cell ref="11" :selected="isSelected[11]" name="11" title="Only show titles" label="sss"/>
                    <Cell ref="22" :selected="isSelected[22]" name="22" title="Only show titles"/>
                    <Cell ref="33" :selected="isSelected[33]" name="33" title="Only show titles"/>
                    <Cell ref="44" :selected="isSelected[44]" name="44" title="Only show titles"/>
                    <Cell ref="55" :selected="isSelected[55]" name="55" title="Only show titles"/>
                    <Cell ref="66" :selected="isSelected[66]" name="66" title="Only show titles"/>
                    <Cell ref="77" :selected="isSelected[77]" name="77" title="With Badge">
                        <Badge :count="10" slot="extra"/>
                    </Cell>
                </CellGroup>
            </Card>
        </div>


        <Card style="width:300px" class="last_cord" shadow>
            <div>当前用户：{{user.username}}</div>
            <a @click="onLogout" slot="extra">
                <Icon size="26" type="md-exit"></Icon>
            </a>
        </Card>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    import AV from 'leancloud-storage'

    export default {
        name: "SidebarList",
        data() {
            return {
                isSelected: {},
                chartRoomId: ''
            }
        },
        computed: {
            ...mapState(['realtime', 'user', 'currentConversationId'])
        },
        mounted() {
            let currentUser = AV.User.current();
            this.realtime.createIMClient(currentUser).then((user) => {
                let query = user.getQuery();
                query.containsMembers([this.user.objectId]).find().then(function (conversations) {
                    console.log(conversations);
                }).catch(console.error.bind(console));
            })
        },
        methods: {
            ...mapMutations(['setIsLogin', 'setUser', 'setCurrentConversationId']),
            ...mapActions(['logout']),
            onLogout() {
                this.logout()
                    .then(() => {
                        this.setIsLogin(false)
                        this.setUser(null)
                        this.$router.push('/')
                    })
            },
            a(e) {
                for (let key in this.isSelected) {
                    this.isSelected[key] = false
                }
                this.$set(this.isSelected, e, true)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/global.scss';

    .side_list {
        background-color: #fff;
        height: 100%;

        .title {
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $title-color;
            border-bottom: 2px solid $border-color;
        }

        .message_list {
            overflow: auto;
            height: calc(100% - 118px);
        }


        .last_cord {
            border-top: 1px solid $border-color;
            border-radius: 0;
            bottom: 0;
            display: flex;
            align-items: center;
        }
    }

</style>