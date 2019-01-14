<template>
    <div class="home">
        <Login class="login"></Login>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Login from '@/components/Login.vue'

    export default {
        name: 'home',
        components: {
            Login
        }
    }
</script>

<style lang="scss" scoped>
.home{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: url("../assets/bgimg.jpg") center no-repeat;
    position: relative;
    background-size: cover;
    &:after{
        content: "";
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        background: inherit;
        filter: blur(10px);
        z-index: 2;
    }
    .login{
        position: absolute;
        padding: 20px;
        background: hsla(0, 0%, 100%, .7);
        border-radius: 5px;
        z-index: 11;
    }
}
</style>