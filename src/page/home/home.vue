<template>
    <div class="myhome homePage">
        <div class="content">
            <!-- <img src="../../assets/image/cnBG.jpg" /> -->
            <audio controls="controls">
                 <source src="../../assets/voice/02.mp3" type="audio/mpeg">
            </audio>
            <el-container>
                <el-header>天依姑娘</el-header>
                <el-container>
                    <el-aside width="300px">
                        <el-carousel height="720px" interval="5000" trigger="click">
                        <el-carousel-item v-for="(item, key) in imgs" :key="key">
                            <img :src="item" />
                        </el-carousel-item>
                        </el-carousel>
                    </el-aside>
                    <el-main>
                        <div class="textbody">特征灰发、绿瞳，发饰碧玉、腰坠中国结的洛天依是一个天然呆，偶然有点温柔细致的十五岁少女。她能够敏锐地感受到他人感情，有点内向。她既有着能够为了别人而流泪的温柔，也有着无论经历多少挫折也绝不放弃的坚强。
她对过去曾在人类世界创造了历史的，传说中的VOCALOID前辈们非常憧憬，也梦想着自己有朝一日能够成为用歌声为别人传递感动与幸福的歌手。这样的她在某日突然获得了召唤，并且带着某个重要的任务，作为新的VOCALOID来到了人类世界。
拥有治愈系声线，来自与我们不同的世界的她，还是一位新人VOCALOID。除了她的歌声以外，她的一切都还是空白。而与你的相遇，将会是她的故事与成长的开始。</div>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
import lty_1 from '@/assets/image/lty/lty_1.jpg'
import lty_2 from '@/assets/image/lty/lty_2.jpg'
import lty_3 from '@/assets/image/lty/lty_3.jpg'
export default{
    data(){
        return {
            imgs: [lty_1, lty_2, lty_3]
        }
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/css/homepage.less';
.content{
    background: #fff;
    width: 90%;
    height: 50px;
    margin: 50px auto 20px;
    img{
        width: 100%;
    }
    .textbody{
        background: white;
    }
}
</style>
