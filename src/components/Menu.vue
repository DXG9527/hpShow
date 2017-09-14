<template>
    <div id="menu">
        <headerComponent></headerComponent>
    </div>
</template>

<script>
    import headerComponent from './HeaderComponent.vue';
    import firstComponent from './FirstComponent.vue';
    import secondComponent from './SecondComponent.vue';
    import loginComponent from './LoginComponent.vue';
    export default {
        name: 'menu',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {headerComponent,firstComponent, secondComponent, loginComponent}
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        /*display: inline-block;*/
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
