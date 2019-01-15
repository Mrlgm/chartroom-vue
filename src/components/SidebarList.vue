<template>
    <div class="side_list">
        <div class="title">
            <h1>小明聊天室</h1>
        </div>
        <Card title="聊天室" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell name="11" title="Only show titles" label="sss"/>
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

        <Card style="width:300px" class="last_cord" shadow>
            <div>当前用户：mrlgm</div>
            <a @click="onLogout" slot="extra">
                <Icon size="26" type="md-exit"></Icon>
            </a>
        </Card>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex'

    export default {
        name: "SidebarList",
        data() {
            return {
                isSelected: {}
            }
        },
        computed: {},
        methods: {
            ...mapMutations(['setIsLogin', 'setUser']),
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
                console.log('xxx')
                console.log(e)
                console.log(this)
                for (let key in this.isSelected) {
                    this.isSelected[key] = false
                }
                this.$set(this.isSelected, e, true)
                console.log(this.isSelected)
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