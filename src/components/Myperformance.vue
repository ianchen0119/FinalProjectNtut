<template>
<div class="container">
    <div class="row">
        <div class="col">
            <div class="input-group-prepend">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">選擇課程</button>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="#" 
            v-for="data in listData" v-bind:key="data.id"
            @click="selectCourse(data.course,data.course_name)"
            >{{data.course_name}}</a>
            </div>
        </div>
        <div class="col">
        <br>
        <h4>課程細節：</h4> 
        <p>你選擇的課程是：{{selectedCourseName}}</p>
        <p>你選擇的堂數是：第{{selectedCourseNumber}}堂</p>
        </div>
    </div>
    </div>
    <div class="row" v-if="courseData">
            <div class="col">
                <div class="input-group-prepend">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">選擇課程</button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#" 
                v-for="(data, Index) in courseData" v-bind:key="data.id"
                @click="selectCourseNumber(Index)"
                >{{Index+1}}</a>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col" v-if="Perform!==null">
        <h4>表現：</h4> 
        <p>專注度：{{(Perform.focus/Perform.total)*100}}%</p>
        <p>記錄時間：{{Perform.start_time}}</p>    
        </div>
        <div class="col" v-else>你根本沒來好嗎</div>
    </div>
</div>
</template>
<script>
import { apiUserMycourse , apiUserMyperformance } from "@/api/index.js"; 
export default {
  name: 'Myperformance',
  data(){
    return{
        listData:null,
        courseData:null,
        selectedCourseName:null,
        selectedCourseNumber:null,
        Perform:null
    }  
  },
  async created(){
      await this.checkout();
      this.getList();
  },
  methods:{
      getList(){
          apiUserMycourse({ params:{
                account: `${this.$store.state.account}`
            }})
          .then(response => {
              this.listData = response.data;
            })
        },
        selectCourse(value,value2){
            this.selectedCourseNumber = null;
            this.courseData = null;
            this.Perform = null;
            this.selectedCourseName=value2;
            const config = {
					headers: { 
						"X-Requested-With": "XMLHttpRequest" }
          }
          apiUserMyperformance({ params:{
                course: `${value}`
            }},config)
            .then(response => {
              this.courseData = response.data.index;
            })
            .catch(error => {
                this.errored = true;
                console.log(error);
                this.check+=1;
                if (this.check==3) {
                  alert("請確定是否已開啟上課監控系統!");
                  this.check=0;
                  }
              })
        },
        selectCourseNumber(value){
            this.selectedCourseNumber = value+1;
            this.yourPerform();
        },
        yourPerform(){
            for(var i in this.courseData){
                if(i == this.selectedCourseNumber-1){
                    // console.log(this.courseData[i].record)
                    
                    for(var j in this.courseData[i].record){
                        // console.log(j)
                        if(j==this.$store.state.account)
                        this.Perform = this.courseData[i].record[j]
                    }
                }
            }
        },
      async checkout(){
          if(this.$store.state.login==false){
              await alert("請先登入！")
              this.$router.push('/Login');
          }
      }
  }
}
</script>
<style lang="scss" scoped>
.container{
    margin-top: 5vh;
}
</style>