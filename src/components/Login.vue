<template>
    <div class="login">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="账号">
                <el-input v-model="formInline.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input placeholder="请输入密码" v-model="formInline.password" show-password></el-input>
                <!--                <el-input v-model="formInline.password" placeholder="审批人"></el-input>-->
                <span style="color: red">{{msg}}</span>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" show-password @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
        <el-button @click="handleExit">退出</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    username: '',
                    password: ''
                },
                msg:''
            }
        },
        methods: {
            onSubmit() {
                this.$axios.post(this.$settings.base_url + '/app_task/login.action', this.formInline,{emulateJSON: true}).then(res => {
                    console.log(res.data)
                    if (res.data.code===1){
                        this.msg = res.data.msg
                        this.$router.push({path: '/Home'})
                    }
                    else {
                         this.msg = res.data.msg
                    }
                })
            },
            handleExit(){
                this.$axios.post(this.$settings.base_url + '/app_task/logout.action', this.formInline,{emulateJSON: true}).then(res => {
                    console.log(res.data)
                    if (res.data.code==0){
                        this.msg = res.data.msg

                    }
                    else {
                         this.msg = res.data.msg
                    }
                })
            }
        }
    }
</script>