<template>
  <div id="app">
      <loginComponent></loginComponent>
  </div>
</template>

<script>
  import loginComponent from './components/LoginComponent.vue';
  export default {
  name: 'app',
//  data () {
//    return {
//      msg: 'Welcome to Your Vue.js App'
//    }
//  },
  components: {loginComponent}
}
</script>

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #98b7e6;
    overflow: auto;
}
</style>
