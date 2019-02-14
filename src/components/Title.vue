<template>
    <div class="title_bar">
        <div>
            <h2>{{name}}</h2>
        </div>
        <img src="../assets/logo.png" alt="">
        <div class="icon_size" @click="modal1=true">
            <Icon size="30" type="ios-person-add"/>
        </div>
        <Modal v-model="modal1"
               title="添加好友"
        >
            <RadioGroup v-model="friend" vertical>
                <Radio v-for="item in friendsList" :label="item.username" :disabled="item.id === user.objectId"></Radio>
                {{friend}}
            </RadioGroup>
        </Modal>
    </div>
</template>

<script>
    import {mapState,} from 'vuex'
    import Bus from '../helper/bus'
    import AV from 'leancloud-storage'

    export default {
        name: "Title",
        computed: {
            ...mapState(['currentConversation', 'user'])
        },
        data() {
            return {
                name: 'hello',
                modal1: false,
                friend: '',
                friendsList: []
            }
        },
        mounted() {
            Bus.$on('setTitle', (name) => {
                this.name = name
            })
            let query = new AV.Query('_User')
            query.find().then((results) => {
                this.friendsList = results.map((item) => {
                    return {...item.attributes, id: item.id}
                })
                console.log(this.friendsList)
            }, function (error) {
            });

        }
    }
</script>

<style lang="scss" scoped>
    .title_bar {
        height: 64px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            height: 30px;
            width: 30px;
            border-radius: 4px;
        }

        .icon_size {
            cursor: pointer;
        }
    }
</style>