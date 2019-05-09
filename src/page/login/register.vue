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
                <el-fprm-item>
                    <img :src="imgurl" alt="img" />
                    <input type="file" name="img" ref="inputer" class="upload" accept="image/*" @change="upload"/>
                </el-fprm-item>
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
            code: '',
            imgurl: ''
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
        },
        upload() {
            let input = this.$refs.inputer
            let imgbase = ''
            console.log(input)
            let file = input.files[0]
            console.log(file)
            const reader = new FileReader();
            reader.readAsDataURL(file);
            console.log(reader)
            // console.log(reader.result)
            reader.onloadend = function() {
                // console.log(this.result)
                self.imgurl = this.result
                imgbase = this.result
                console.log(self.imgurl)
            }
            // this.imgurl = reader.result
            // console.log(this.imgurl)

            this.$http.post(`/upload.php`,imgbase).then(function (response) {
                console.log(response);
                that.$message({
                    message: response.data,
                    type: 'success'
                })
                console.log(response.data)
                that.$router.push({
                name: 'home'
                })
            }).catch(function (error) {
                console.log(error);
                that.$message.error('登录失败');
            });
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

            .upload{
                margin: 0 auto 30px;
            }
        }
    }
}
</style>
