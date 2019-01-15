<template>
    <div class="message_content">
        <div class="message_list">
            <ul>
                <li class="other_send">
                    <div class="time">
                        <span>2019/1/12 17:53</span>
                    </div>
                    <div class="from">
                        <img src="../assets/logo.png" alt="">
                        <div class="content">hhhhhh</div>
                    </div>
                </li>
                <li class="self_send">
                    <div class="time">
                        <span>2019/1/12 17:54</span>
                    </div>
                    <div class="from">
                        <img src="../assets/avatar.jpeg" alt="">
                        <div class="content">hhhhhh</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageContent"
    }
</script>

<style lang="scss" scoped>
    .message_content {

        height: 100%;
        display: flex;
        justify-content: center;

        .message_list {
            width: 80%;
            padding: 0 100px;

            li {
                list-style: none;
                .time{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;

                }
                .from{
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
                    .from{
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