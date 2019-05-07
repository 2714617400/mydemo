<template>
    <div class="register">
        <div class="register-two">
            <el-form ref="form" :model="form" class="form">
                <el-form-item label="账号">
                    <el-input prefix-icon="el-icon-s-custom" placeholder="请输入邮箱" v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input prefix-icon="el-icon-key" placeholder="请输入密码" v-model="password" show-password></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input prefix-icon="el-icon-key" placeholder="请再次输入密码" v-model="password" show-password></el-input>
                </el-form-item>
                <el-form-item label="邀请码">
                    <el-input prefix-icon="el-icon-key" placeholder="请输入邀请码" v-model="code"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-radio v-model="Gender" label="1">男</el-radio>
                    <el-radio v-model="Gender" label="2">女</el-radio>
                </el-form-item>
                <el-form-item >
                    <el-button @click="goBack()">返回登录界面</el-button>
                    <el-button type="primary" @click="submit()">创建!</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default{
    data (){
        return {
            email: '',
            password: '',
            password2: '',
            Gender: '',
            code: ''
        }
    },
    methods: {
        goBack() {
            this.$router.push({
              name: 'login'
            })
        },
        submit() {
            return 
            this.$router.push({
              name: 'login'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.register{
    position: relative;
    .register-two{
        padding: 100px 0 0 0;
        .form{
            width:15%;
            padding: 90px;
            margin: 0 auto;
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.5);
        }
    }
}
</style>
