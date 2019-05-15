<template>
    <div class="myhome homePage">
        <div class="head">
            <!-- <h1>主页</h1> -->
        </div>
        <div class="content">
            <img src="../../assets/image/j20.jpg" />
            <p>歼-20战斗机（J-20）绰号威龙，北约代号火牙，是由成都飞机设计研究所设计、成都飞机工业集团生产、装备于中国人民解放军空军的单座、双发、鸭式气动布局重型隐形战机，是第五代战斗机。由成飞总设计师杨伟主导。</p>
            <p>歼-20于2016年11月在第十一届中国国际航空航天博览会上首次公开亮相并进行双机飞行展示。2017年7月30日，3架歼-20A在庆祝中国人民解放军建军90周年阅兵上首次以战斗姿态公开飞行展示。</p>
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
    // background: rgba(255, 255, 255, 0.5);
    width: 90%;
    // height: 50px;
    margin: 50px auto 20px;
    padding: 20px 10px;
    overflow: hidden;
    img{
        width: 50%;
        margin: 50px 0 30px 0;
        border-radius: 5px;
        box-shadow: 3px 5px 12px 3px rgba(22, 22, 22, 1)
    }
    p{
        color: rgb(163, 163, 163);
        text-align: left;
        line-height: 1.5em;
    }
}
</style>
