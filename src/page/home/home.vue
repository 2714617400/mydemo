<template>
    <div class="myhome homePage">
        <div class="head">
            <h1>主页</h1>
            <p>welcome my home!</p>
        </div>
        <div class="content">
            <!-- <img :src="" alt='' /> -->
            <span>文字说明</span>
            <form action="127.0.0.1:80/upload.php" method="post"
            enctype="multipart/form-data">
                <label for="file">Filename:</label>
                <input type="file" name="file" id="file" /> 
                <br />
                <input type="submit" name="submit" value="Submit" />
            </form>
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
</style>
