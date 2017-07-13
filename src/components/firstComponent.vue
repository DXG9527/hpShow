<template>
    <div id="firstComponent">
        <h1>这是一个未完成的主页</h1>
        <h4>written by {{author}}</h4>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                author: 'dxg'
            }
        }
    }
</script>
<style>
    #firstComponent {
        padding: 120px 70px ;
    }
</style>