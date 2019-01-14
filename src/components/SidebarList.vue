<template>
    <div class="side_list">
        <div class="title">
            <h1>小明聊天室</h1>
        </div>
        <Card title="聊天室" :padding="0" shadow style="width: 300px;">
            <CellGroup onclick="a(name)">
                <Cell name="11" title="Only show titles" label="sss"/>
            </CellGroup>
        </Card>
        <Card title="单聊" icon="ios-person" :padding="0" shadow style="width: 300px;">
            <CellGroup class="box" onclick="">
                <Cell selected name="11" title="Only show titles" label="sss"/>
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
            <CellGroup class="box" onclick="">
                <Cell name="11" title="Only show titles" label="sss"/>
                <Cell name="22" title="Only show titles"/>
                <Cell name="33" title="Only show titles"/>
                <Cell name="44" title="Only show titles"/>
                <Cell name="55" title="Only show titles"/>
                <Cell name="33" title="Only show titles"/>
                <Cell title="With Badge">
                    <Badge :count="10" slot="extra"/>
                </Cell>
            </CellGroup>
        </Card>

        <Card style="width:300px" class="last_cord" shadow>
            <div>当前用户：mrlgm</div>
            <a href="#" slot="extra">
                <Icon size="26" type="md-exit"></Icon>
            </a>
        </Card>
    </div>
</template>

<script>
    export default {
        name: "SidebarList",
        methods: {
            a(e) {
                console.log(e)
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

        .box {
            max-height: 300px;
            overflow: auto;
        }

        .last_cord {
            position: absolute;
            border-top: 1px solid $border-color;
            border-radius: 0;
            bottom: 0;
            display: flex;
            align-items: center;
        }
    }

</style>