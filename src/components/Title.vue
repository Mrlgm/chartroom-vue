<template>
    <div class="title_bar">
        <div>
            <h2>{{name}}</h2>
        </div>
        <img src="../assets/logo.png" alt="">
        <div class="icon_size">
            <Icon size="30" type="ios-person-add"/>
        </div>
    </div>
</template>

<script>
    import {mapState,} from 'vuex'
    import Bus from '../helper/bus'
    export default {
        name: "Title",
        computed:{
            ...mapState['currentConversation']
        },
        data(){
            return{
                name:'hello'
            }
        },
        mounted(){
            Bus.$on('setTitle',(name)=>{
                this.name = name
            })
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
    }
</style>