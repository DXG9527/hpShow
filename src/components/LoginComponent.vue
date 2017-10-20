<template>
 <div id="loginComponent">
     <div class="login-panel">用户登陆</div>
     <div class="login-input">
         <el-input v-model="userName" placeholder="帐号" icon="fa-user-o"></el-input>
         <el-input v-model="password" placeholder="密码" icon="fa-lock" type="password"></el-input>
     </div>
     <div class="errMsg" v-if="display">
         <el-icon class="el-icon-circle-close"></el-icon>
         <span>{{errMsg}}</span>
     </div>
     <div class="word-tip">
         <el-checkbox v-model="checked">记住我</el-checkbox>
         <a v-bind:href="url">忘记密码</a>
     </div>
     <div class="login-button">
         <div><el-button v-on:click = "login">登陆</el-button></div>
         <div><el-button>注册</el-button></div>
     </div>
 </div>
</template>
<script>
import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
import ElCheckbox from "../../node_modules/element-ui/packages/checkbox/src/checkbox.vue";
import ElIcon from "../../node_modules/element-ui/packages/icon/src/icon.vue";

export default {
    components: {
        ElIcon,
        ElCheckbox,
        ElButton
    },
    methods: {
        login(){
            if (this.userName === '') {
                this.display = true;
                this.errMsg = '请输入用户名';
            } else if (this.userName !== '' && this.password === '') {
                this.display = true;
                this.errMsg = '请输入密码';
            } else if (this.userName !== '' && this.password !== '' && this.userName !== this.password) {
                this.display = true;
                this.errMsg = '用户名和密码不一致';
            } else {
                this.display = false;
                this.errMsg = '';
                window.open('test2.html', '_self');
            }
        }
    },
    data() {
        return {
            password: '',
            userName: '',
            checked: false,
            url: '#',
            errMsg: '',
            display: false
        }
  }
}
</script>
<style lang="scss">
    #loginComponent {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 50%;
        height: 50%;
        max-width: 330px;
        min-height: 300px;
        margin: auto;
    }

    .login-panel {
        text-align: center;
        font-size: x-large;
        margin-bottom: 10px;
    }

    .el-input {
        width: 100%;
        height: 30px;
        margin-top: 10px;
    }

    .login-button {
        width: 100%;
        margin-top: 10px;

        > div {
            float: left;
            width: 50%;
            height: 30px;
            > button {
                width: 100%;
            }
        }
    }

    .word-tip {
        margin-top: 10px;
        >a {
            text-decoration: none;
            float: right;
            color: #000000;
            font-size: 14px;
        }
    }

    .errMsg {
        margin-top: 15px;
        width: 100%;
        height: 25px;
        line-height: 25px;
        background-color: #fff0f0;
        border: 1px solid #ffd2d2;
        color: #b74d46;
        border-radius: 3px;
        font-size: 14px;
        .el-icon-circle-close {
            color: #ff0000;
            margin-left: 5px;
            margin-right: 5px;
        }
    }

</style>
