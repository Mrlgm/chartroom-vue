<template>
    <div class="send_message">
        <img style="margin-right:8px;" src="../assets/avatar.jpeg" alt="">
        <Input v-model="value" type="textarea" placeholder="Enter something..." clearable style="width: 400px"
               autosize/>
        <Button @click="pushMessage" style="margin-left:8px;" type="primary" icon="ios-send">Send</Button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Bus from '../helper/bus'

    export default {
        name: "SendMessage",
        data() {
            return {
                value: ''
            }
        },
        methods: {
            ...mapActions(['sendMessage']),
            pushMessage() {
                this.sendMessage(this.value).then((message)=>{
                    Bus.$emit('sendSuccess', message);
                })
                this.value = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/global";

    .send_message {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 30px;
            border-radius: 4px;
        }
    }
</style>