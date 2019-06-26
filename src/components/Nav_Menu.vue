<template>
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
        <el-menu-item index="3" route="messagebox">留言板</el-menu-item>
        <el-menu-item index="4" route="config">设置</el-menu-item>
    </el-menu>
</div>
</template>

<script>
</script>

<style>
</style>
