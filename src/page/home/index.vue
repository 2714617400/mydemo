<template>
    <div>
        <el-menu 
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#c4c4c4"
        text-color="#fff"
        active-text-color="#FFFF00"
        >
            <el-menu-item index="1">我的</el-menu-item>
            <el-menu-item index="2">新闻</el-menu-item>
            <el-menu-item index="3">留言板</el-menu-item>
            <el-menu-item index="4">设置</el-menu-item>
        </el-menu>
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

<style>
</style>
