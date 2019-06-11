<template>
    <div class="myhome homePage">
        <div class="head">
            <h1>主页</h1>
            <p>welcome my home!</p>
        </div>
        <div class="content">
            <!-- <img src="../../assets/image/cnBG.jpg" /> -->
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/css/homepage.less';
// .myhome{
//     // min-height: 1000px;
//     background: #fff;
//     box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.3);
//     .head{

//     }
// }
.content{
    background: #fff;
    width: 90%;
    height: 50px;
    margin: 50px auto 20px;
    img{
        width: 100%;
    }
}
</style>
