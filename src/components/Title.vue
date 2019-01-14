<template>
    <div class="title_bar">
        <div>
            <h2>hello</h2>
        </div>
        <img src="../assets/logo.png" alt="">
        <div class="icon_size">
            <Icon size="30" type="ios-person-add"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Title"
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