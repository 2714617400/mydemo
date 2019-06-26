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
    created() {
        if(localStorage.getItem('mychecked')) {
            this.username = localStorage.getItem('myname')
            this.password = localStorage.getItem('mypassword')
            this.checked = true
        }
        this.$router.push({name: 'home'})
    },
    methods: {
        submit() {
            let that = this
            // this.$http.get(`/login.php?username=${this.username}&password=${this.password}`).then(function (response) {
            //     if (response.data === '登录失败') {
            //         that.$message.error('登录失败')
            //         return
            //     }
            //     console.log(response);
            //     that.$message({
            //         message: response.data,
            //         type: 'success'
            //     })
            //     console.log(response.data)
            //     that.$router.push({
            //     name: 'home'
            //     })
            // }).catch(function (error) {
            //     console.log(error);
            //     that.$message.error('登录失败')
            // });
            if (this.username === 'admin' && this.password === '123456') {
                this.$message({
                message: '登录成功!',
                type: 'success'
                });
            } else {
                this.$message.error('登录失败');
            }
            if (this.checked) {
                localStorage.setItem('myname',this.username)
                localStorage.setItem('mypassword',this.password)
                localStorage.setItem('mychecked',this.checked)
            } else {
                localStorage.setItem('myname','')
                localStorage.setItem('mypassword','')
                localStorage.setItem('mychecked','')
            }
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .login-two{
        padding: 200px 0 0 0;
        .form{
            width:20%;
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
