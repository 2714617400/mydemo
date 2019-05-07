<template>
    <div class="login">
        <div class="login-form">
            <el-input prefix-icon="el-icon-s-custom" placeholder="请输入账号" v-model="username"></el-input>
            <el-input prefix-icon="el-icon-key" placeholder="请输入密码" v-model="password" show-password></el-input>
            <el-button @click="submit()">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submit() {
            return 
        }
    }
}
</script>

<style>
.login{
    border: 1px black solid;
    border-radius: 15px;
}
.login-form{
    width: 30%;
    margin: 30px auto;
    padding: 0 30px;
}
</style>
