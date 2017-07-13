<template>
    <div id="secondComponent">
        <el-carousel :interval="4000" type="card" height="450px">
            <el-carousel-item v-for="article in articles" :key="article">
                <div class="title"><h3>{{article.title}}</h3></div>
                <img :src='article.src'  alt="发展历程" />
            </el-carousel-item>
        </el-carousel>
        <!--<ul>-->
            <!--<li v-for="article in articles">-->
                <!--<img :src='article'  alt="发展历程" />-->
            <!--</li>-->
        <!--</ul>-->
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data() {
            return {
                articles : [
                    {
                        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497507060372&di=5cba033515252a8ba0ab4b9fc04f65af&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F11%2F12%2F71%2F58x58PIC5rz.jpg',
                        title: '发展1'
                    },
                    {
                        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497507060371&di=a7eb2856d9f8d28e88b707f6fd22068a&imgtype=0&src=http%3A%2F%2Fpic5.nipic.com%2F20100302%2F3403052_171625846077_2.jpg',
                        title: '发展2'
                    },
                    {
                        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497507060370&di=d83d83632543ed41d87780510f6904a1&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150708%2F0017030067204588_b.jpg',
                        title: '发展3'
                    },
                    {
                        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497507060370&di=d83d83632543ed41d87780510f6904a1&imgtype=0&src=http%3A%2F%2Fpic36.photophoto.cn%2F20150708%2F0017030067204588_b.jpg',
                        title: '发展4'
                    },
                    {
                        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497507060367&di=814fe3781ee417c7fcbbd580011a2117&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130509%2F749044_112221025312_2.jpg',
                        title: '发展4'
                    },
                    {
                        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497507060362&di=fe726b81c8e7af1e039438a9b06d0165&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F121112%2F234996-12111214521184.jpg',
                        title: '发展5'
                    }
                ]
            }
        },
//        mounted: function () {
//            axios.get('https://dev.ud.itt.space/ud-app-service/ud/menu')
//                .then((result) => {
//                    this.articles = result.data.data;
//                    console.log(result);
//                })
//        }
    }
</script>
<style>
    #secondComponent {
        width: 1200px;
        height: 250px;
        padding: 120px 70px ;
    }
    .el-carousel__item div {
        background-color: #EFF2F7;
        text-align: center;
        padding-bottom: 10px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        /*line-height: 200px;*/
        margin: 0;
    }

    .el-carousel__item img {
        opacity: 0.75;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-carousel__indicators {
        padding-left: 415px;
        padding-top: 35px;
    }
</style>