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
            <!-- <router-view></router-view> -->
            <div class="content-area hover-box-shadow" v-for="(item, key) in content" :key="key">
                <h1>{{item.title}}</h1>
                <ul class="list-label">
                    <li v-for="child in item.label">#{{child}}</li>
                </ul>
                <h2>简介</h2>
                <span>{{item.describe}}</span>
                <img :src="item.image" v-if="item.image" />
            </div>
            <div class="content-right hover-box-shadow">

            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            activeIndex: '1',
            content: [
                {
                    title: '震惊！草帽王已成为海贼王',
                    label: ['动漫', '海贼王', '路飞', '热血'],
                    describe: '好了，你明天来uc震惊部上班吧！',
                    image: ''
                },
                {
                    title: '鸣人成为第六代火影',
                    label: ['动漫', '火影忍者', '漩涡鸣人', '感动', '忍者'],
                    describe: '为实现梦想，和守护伙伴们的羁绊，鸣人不断修炼变强，作为木叶“三忍”之一自来也的弟子，在追求梦想的过程中不断突破自我，贯彻了自身的忍道，获得人们的认可。最后与忍者联军以及宇智波佐助还有九尾一同终结了战争，为忍者世界带来和平，并实现自己成为火影（七代目火影）和忍界英雄的梦想。',
                    image: ''
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/css/homepage.less';
.home{
    width: 100%;
    height: 100%;
    .BGimg{
        background: url("../../assets/image/bg-cat.jpg") no-repeat;
        background: rgba(221, 221, 221, 0.5);
        background-size: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        z-index: -99;
        // filter: blur(2px);
        // overflow: hidden;
        background-position: center center;
        // background-size: 125% 125%;
    }
    .nav{
        display: inline-block;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        overflow: hidden;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
        z-index: 99;
    }
    .content{
        width: 1200px;
        min-height: 600px;
        margin: 50px auto 0;
        // overflow: hidden;
        // border: 1px red solid;
    }
    .content-area{
        width: 70%;
        margin:  0 0 30px 0;
        float: left;
        text-align: left;
        .list-label{
            list-style-type: none;
            &>li{
                display: inline-block;
                border-radius: 3px;
                padding: 5px;
                margin: 0 5px 0 5px;
                border-left: 3px rgba(0, 179, 60, 0.829) solid;
                background: rgba(0, 107, 14, 0.2);
            }
        }
    }
    .content-right{
        width: 25%;
        margin: 0 0 10px 0;
        float: right;
    }
}
</style>
