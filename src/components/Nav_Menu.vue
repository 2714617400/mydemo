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
        console.log(this.$refs.ul.children.length)
        var divele = this.$refs.ul.lastChild
        for (let i = 0; i < this.$refs.ul.children.length; i++) {
            this.$refs.ul.children[i].onclick = function (divele) {
                console.log(divele)
            }
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
