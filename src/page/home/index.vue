<template>
    <div class="home">
        <div class="BGimg">
        </div>
        <div class="nav">
            <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router="ture"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
                <el-menu-item index="1" route="myhome">主页</el-menu-item>
                <el-menu-item index="2" route="dynamic">动态</el-menu-item>
                <!-- <el-menu-item index="3" route="messagebox">留言板</el-menu-item> -->
                <!-- <el-menu-item index="4" route="config">设置</el-menu-item> -->
            </el-menu>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            activeIndex: '1'
        }
    }
}
</script>

<style lang="less" scoped>
.home{
    // background: url("../../assets/image/blackBG.jpg");
    // position: fixed;
    width: 100%;
    height: 100%;
    // top: 0px;
    // background-color: #ffffff;
    .BGimg{
        background: url("../../assets/image/anheiBG.jpg") no-repeat;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index: -99;
    }
    .nav{
        // border: 1px red solid;
        display: inline-block;
        // width: 600px;
        // padding: 0 30px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        overflow: hidden;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
        z-index: 99;
    }
    .content{
        width: 1200px;
        // border:1px red solid;
        margin: 50px auto 0;
        overflow: hidden;
    }
}
</style>
