<template>
    <div id="headerComponent">
        <div class="header">
            <ul>
                <li><router-link to="/first">首页</router-link></li>
                <li><router-link to="/second">发展历程</router-link></li>
                <li><router-link to="/login">登录/注册</router-link></li>
                <router-view class="view"></router-view>
            </ul>
        </div>
        <!--<el-menu theme="dark" :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">-->
            <!--<el-menu-item index="1"><router-link to="/first">第一页</router-link></el-menu-item>-->
            <!--<el-menu-item index="2"><router-link to="/second">第二页</router-link></el-menu-item>-->
        <!--</el-menu>-->
        <!--<router-view class="view"></router-view>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    #headerComponent {
        width: 1400px;
    }
    .header {
        background-color: #20a0ff;
        width: 1400px;
        height: 40px;
    }
    .header ul li{
        float: left;
        padding-top: 8px;
    }
    .header ul li a {
        display: block;
        padding: 0 20px;
        opacity: .8;
        color: #fff;
        text-decoration: none;
    }
    .el-menu {
        padding-left: 55px;
        background-color: #324157;
        border-radius: 2px;
        position: relative;
        margin: 0;
        width: 1400px;
    }
</style>