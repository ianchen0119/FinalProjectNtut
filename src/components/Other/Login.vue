<template>
<div>
    <div class="container">
    <form>
    <div class="form-group">
        <label for="exampleInputAccount">Your Account</label>
        <input type="account" class="form-control" id="exampleInputAccount" v-model="account">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary" @click="login">登入</button>
    </form>
    </div>
</div>
</template>
<script>
import { apiUserLogin } from "@/api/index.js"; 
export default {
    name:'Login',
    data(){
        return{
            account:null,
            password:null,
            success:false,
            error_tips:null
        }
    },
    methods:{
        login(){
            apiUserLogin({ params:{
                account: `${this.account}`,
                password: `${this.password}`
            }})
            .then( res => {
                if(res.data.status == "Failed"){
                    alert("帳號或密碼錯誤！")
                    // console.log(res);
                }
                else if(res.data.permit == 2){
                    alert("尚未開放教師使用！")
                }
                else{
                    console.log(res);
                    this.$store.commit('loginSuccess',res.data)
                    this.success = true;
                    this.$router.push('/');
                }
            })
            .catch( err => {
                console.log(err);
                this.error_tips = true;
            })
        }
    }   
}
</script>
<style lang="scss" scoped>
.container{
    margin-top: 5vh;
}
</style>