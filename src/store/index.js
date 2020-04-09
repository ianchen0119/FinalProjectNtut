import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        login:false,//預設為false,登入後為true
        account:null,
        permit:null, //1為學生,2為老師
        name:null
      },
    // getters,
    // actions,
    mutations:{
        loginSuccess(state,...data){
            // console.log(data[0])
            state.login = true
            state.account = data[0].account
            state.permit = data[0].permit
            state.name = data[0].name
        },
        logOut(state){
            state.login = false
            state.account = null
            state.permit = null
            state.name = null
            alert('您已成功登出！')
        }
    }
})