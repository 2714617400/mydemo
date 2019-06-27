<template>
    <div class="home">
        <div class="BGimg">
        </div>
        <div class="head-nav">
            <ul>
                <li v-for="item in navList">{{item}}</li>
            </ul>
        </div>
        <div class="content">
            <!-- <router-view></router-view> -->
            <div class="content-right">
                <div class="user-info hover-box-shadow">
                    <img src="../../assets/image/bg-cat.jpg" />
                </div>
                <div class="recommend hover-box-shadow">
                    <ul>
                        <li v-for="reco in Recommend">{{reco}}</li>
                    </ul>
                </div>
            </div>
            <div class="content-area hover-box-shadow" v-for="(item, key) in content" :key="key">
                <h1>{{item.title}}</h1>
                <ul class="list-label">
                    <li v-for="child in item.label">#{{child}}</li>
                </ul>
                <h2>简介</h2>
                <span>{{item.describe}}</span>
                <img :src="item.image" v-if="item.image" />
            </div>
        </div>
        <div class="foot">
            <p>这是底部</p>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            activeIndex: '1',
            navList: ['主页', '图片', '设置'],
            Recommend: ['动漫', '妖精的尾巴', 'JOJO的奇妙冒险', '平成废物'],
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
    .head-nav{
        padding: 10px;
        position: fixed;
        top: 0px;
        width: 100%;
        text-align: center;
        box-shadow: 0 1px 2px 2px rgba(37, 37, 37, 0.2);
        z-index: 99;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center;
        background:  rgba(221, 221, 221, 1);
        ul{
            list-style-type: none;
            overflow: hidden;
            li{
                float: left;
                padding: 10px 20px;
                cursor: pointer;
            }
        }
    }
    .content{
        width: 1200px;
        min-height: 600px;
        margin: 150px auto 0;
        // overflow: hidden;
        // border: 1px red solid;
    }
    .foot{
        width: 100%;
        position: fixed;
        bottom: 0px;
        text-align: center;
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
        float: right;
        // overflow: hidden;
        &>div{
            margin: 0 0 10px 0;
        }
        .user-info{
            // margin: 0 0 10px 0;
            img{
                width: 100%;
            }
        }
        .recommend{
            ul{
                list-style-type: none;
                padding: 10px 0 10px 0;
                text-align: left;
                li{
                    padding: 0px 5px;
                    margin-bottom: 5px;
                    border-color: rgba(0, 179, 60, 0.829);
                    border-style: solid;
                    border-width: 0px;
                    transition: border-left-width .2s;
                    -moz-transition: border-left-width .2s;	/* Firefox 4 */
                    -webkit-transition: border-left-width .2s;	/* Safari 和 Chrome */
                    -o-transition: border-left-width .2s;	/* Opera */
                    &:hover{
                        border-left-width: 3px;
                    }
                }
            }
        }
    }
}
</style>
