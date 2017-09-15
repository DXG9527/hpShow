<template>
 <div id="loginComponent">
     <div class="login-input">
         <el-input v-model="password" placeholder="帐号" icon="fa-user-o"></el-input>
         <el-input v-model="userName" placeholder="密码" icon="fa fa-lock"></el-input>
     </div>
     <div class="word-tip">
         <span>记住我</span>
         <span class="forgetPW">忘记密码</span>
     </div>
     <div class="login-button">
         <button>登陆</button>
         <button>注册</button>
     </div>
 </div>
</template>
<script>
export default {
  data() {
    return {
        password: '',
        userName:''
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
        > button {
            width: 40%;
            height: 30px;
        }
    }

    .word-tip {
        margin-top: 5px;
        .forgetPW {
            float: right;
        }
    }
</style>
