<template>
 <div id="loginComponent">
     <div class="login-panel">
         <p>用户登陆</p>
     </div>
     <div class="login-input">
         <el-input v-model="password" placeholder="帐号" icon="fa-user-o"></el-input>
         <el-input v-model="userName" placeholder="密码" icon="fa-lock"></el-input>
     </div>
     <div class="word-tip">
         <el-checkbox>记住我</el-checkbox>
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

export default {
    components: {
        ElCheckbox,
        ElButton
    },
    methods: {
        login: () =>{
            let self = this;
            console.log('------', this);
            if (self.userName !== '' && self.userName === self.password) {
                alert("OK");
            } else {
                alert("Bad");
            }
        }
    },
    data() {
    return {
        password: '',
        userName:'',
        url:'#'
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

    .el-input {
        width: 100%;
        height: 30px;
        margin-top: 10px;
    }

    .login-button {
        width: 100%;
        margin-top: 5px;

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
        }
    }
</style>
