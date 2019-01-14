<template>
    <div class="conversations">
        <Layout class="layout">
            <Sider breakpoint="md" width="300" collapsible :collapsed-width="78" v-model="isCollapsed">
                <SidebarList :class="listItemClasses" width="auto"></SidebarList>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="title_bar_wrapper">
                    <Title></Title>
                </Header>
                <Content class="message_content_wrapper">
                    <MessageContent></MessageContent>
                </Content>
                <Footer class="send_message_wrapper">
                    <SendMessage></SendMessage>
                </Footer>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import SidebarList from '../components/SidebarList'
    import Title from '../components/Title'
    import SendMessage from '../components/SendMessage'
    import MessageContent from '../components/MessageContent'

    export default {
        name: "Conversations",
        components: {
            SidebarList,
            Title,
            SendMessage,
            MessageContent
        },
        data(){
            return{
                isCollapsed:false
            }
        },
        computed:{
            listItemClasses(){
                return [
                    this.isCollapsed ? 'list' : ''
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/global";
.conversations{
    height: 100%;
    .layout{
        height: 100%;
        .list{
            height: 100%;
            display: inline-block;
            overflow: hidden;
            width: 69px;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: bottom;
            transition: width .2s ease .2s;
        }
        .title_bar_wrapper{
            background-color: $title-color;
        }
        .message_content_wrapper{
            height: 100%;
            overflow: auto;
            background: url("../assets/bgchart.jpg") center no-repeat;
        }
        .send_message_wrapper{
            border-top: 1px solid #ddd;
        }
    }
}
</style>