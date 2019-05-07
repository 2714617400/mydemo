<template>
    <div class="login">
        <div class="login-two">
            <el-form ref="form" :model="form" class="form">
                <el-form-item label="账号">
                    <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input prefix-icon="el-icon-key" placeholder="请输入密码" v-model="password" show-password></el-input>
                </el-form-item>
                <el-form-item >
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                </el-form-item>
                <el-form-item >
                    <el-button type="primary" @click="submit()">登录</el-button>
                    <router-link to="register" class="toRegister">注册</router-link>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            username: '',
            password: '',
            checked: false
        }
    },
    methods: {
        submit() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                loading.close();
            }, 2000); 
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    position: relative;
    .login-two{
        padding: 200px 0 0 0;
        .form{
            width:15%;
            padding: 30px;
            margin: 0 auto;
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.5);
            // box-shadow: 0px 2px 6px 0 rgba(255, 215, 0, 0.2);
            .toRegister{
                display: block;
                text-decoration: none;
                margin: 30px 0 0 0;
                color: rgba(220, 220, 220, 0.5)
            }
        }
    }
}
</style>
