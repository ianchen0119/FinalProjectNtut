<template>
  <div class="wrap">
		<br>
	<div class="container">
		<br>
		<h2>學生狀態即時更新</h2>
		<br>
    <div>
        <div v-show="listLoading">loading...</div>
        <ul class="list-group">
          <li class="list-group-item" 
          v-for="data in listData" 
          v-bind:key="data.id" 
          @click="start(data.course)" v-show="!listLoading">{{data.course_name}}</li>
        </ul>
    </div>
    <div v-show="loading">loading...</div>
    <!-- {{student}} -->
		<div v-for="all in student" v-bind:key="all.id" class="situation">
			<div class="person">
				<p>學號: {{all.name}}</p>
				<p v-if="all.situation==1">目前狀態: 認真</p>
        <p v-else>目前狀態: 不認真</p>
			</div>
		</div>
		<br>
	</div>
	</div>
</template>
<script>
import { apiUserDynamic , apiUserMycourse } from "@/api/index.js"; 
export default {
  name: 'Dynamic',
  props: {
    msg: String
  },
  created(){
    this.init();
    this.getList();
    this.checkout();
  },
  data(){
				return{
          selected:false,
          listLoading:true,
          listData:null,
					loading:true,
					student:null,
          check:0,
          t:null
				};
      },
  methods:{
        init(){
          let footer = document.querySelector('.footer');
          footer.style.display = 'block';
        },
        async checkout(){
              if(this.$store.state.login==false){
                  await alert("請先登入！")
                  this.$router.push('/Login');
              }
          },
        getList(){
          apiUserMycourse({ params:{
                account: `${this.$store.state.account}`
            }})
          .then(response => {
              this.listData = response.data;
              this.listLoading = false;
            })
        },
				getstudent(courseNumber) {
					const config = {
					headers: { 
						"X-Requested-With": "XMLHttpRequest" }
          }
          apiUserDynamic(
            {params:{course:`${courseNumber}`}},
            config)
          .then(response => {
              this.student = response.data.data[0].result;
            })
          .catch(error => {
                this.errored = true;
                console.log(error);
                this.check+=1;
                if (this.check==3) {
                  alert("請確定是否已開啟上課監控系統!");
                  clearInterval(this.t);
                  this.check=0;
                  this.$router.push('/');
                  }
              })
          .finally(() => (this.loading = false));
          },
          start(courseNumber){
            if(this.selected == true){
              alert("你已經選定課程，請稍等！");
            }
            else{
              this.student = "";
              this.setAjax(courseNumber);
              this.selected = true;
            }
          },
          setAjax(courseNumber){
              this.t = setInterval(() => {
              this.getstudent(courseNumber)
              }, 1000)
          }
			}
}
</script>
<style lang="scss" scoped>
		.person{
			border-radius: 25px;
			border: 1px solid #888;
			text-align: left;
			padding-left: 50px;
			padding-top: 10px;
		}
    .situation{
      margin-top: 1vh;
    }
    .situation:first-child{
      margin-top: 5vh;
    }
    .list-group{
      margin-bottom: 5vh;
      .list-group-item{
      &:hover{
      background-color:#007bff;
      color:#FFF;
      }
    }
    }

</style>