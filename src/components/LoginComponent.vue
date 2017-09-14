<template>
 <div id="loginComponent">
     <input v-model="password" placeholder="请输入内容"></input>
     <input v-model="userName" placeholder="请输入内容"></input>
     <button>默认按钮</button>
     <button>默认按钮</button>
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
<style>
    #loginComponent {
        padding: 120px 70px ;
    }
</style>