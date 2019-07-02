<template>
<div class="nav">
    <ul ref="ul">
        <li>nihao</li>
        <li>鸟</li>
        <li>尼奥</li>
        <div class="sign"></div>
    </ul>
</div>
</template>

<script>
export default{
    mounted() {
        console.log(this.$refs.ul.lastChild.offsetLeft)
        var divele = this.$refs.ul.lastChild
        console.log(divele.getBoundingClientRect(), 'divele')
        console.log(divele.offsetWidth, divele.scrollLeft)
        // this.$refs.drop.style.backgroundColor="#ff0000"
        // console.log(this.$refs.drop, 'divele')
        for (let i = 0; i < this.$refs.ul.children.length; i++) {
            this.$refs.ul.children[i].onclick = function () {
                // console.log(divele)
            }
            console.log(this.$refs.ul.children[i].offsetLeft)
        }
        // this.$refs.ul.children.
    }
}
</script>

<style lang="less" scoped>
.nav{
   // margin: 0 auto;
   line-height: 2.2em;
   background:  rgba(221, 221, 221, 1);
   box-shadow: 0 1px 2px 2px rgba(37, 37, 37, 0.2);
   ul{
       display: inline-block;
       list-style-type: none;
       position: relative;
       top: 0;
       left: 0;
       li{
           display: inline-block;
           padding: 10px 20px;
           &:hover{
               background:  rgba(233, 144, 29, 0.5);
           }
       }
       .sign{
           border: 1px green solid;
           position: absolute;
           bottom: 0;
           left: 0;
       }
   }
}
</style>
