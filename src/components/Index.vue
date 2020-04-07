<template>
  <div class="container">
    <div class="row">
    <div class="col-sm-6 col-12">
        <div class="card__title">
          <h3>媒體報導</h3>
        </div>
        <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">企業最愛大學 北科大稱霸技職</li>
          <li class="list-group-item">臺北科大攜群光電能 攻5G、雲端技術</li>
          <li class="list-group-item">群燁股份有限公司捐贈教學軟體並提供實習機會，提升學生就業優勢</li>
        </ul>
      </div>
      <div class="card__title">
        <h3>防疫專區</h3>
      </div>
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">為因應本校防疫出入口管制，洽公者請申請一日通行證</li>
          <li class="list-group-item">因應新型冠狀病毒肺炎疫情學生安心就學措施  （Taipei Tech Measures in Response to the COVID-19 Outbreak）</li>
          <li class="list-group-item">本校教職員工自109年4月1日起進入校園將採實名制門禁管制。</li>
        </ul>
      </div>
    </div>
    <div class="col-sm-6 col-12">
      <div class="card__title">
        <h3>天氣預報</h3>
      </div>
      <iframe src="https://ianchen0119.github.io/taiwanweather/"  frameborder="0"></iframe>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  },
  created(){
    this.checkout();
    this.init();
  },
  methods:{
    init(){
      let footer = document.querySelector('.footer');
      footer.style.display = 'none';
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container{
  margin: 0 auto;
  margin-top: 30px;
}
.card__title{
  text-align: left;
  
  margin: 1em 0;
  margin-left: 2rem;
  h3{
    display: list-item;
    list-style:disc;
  }
}
iframe{
  width: 100%;
  height: 600px;
  border-radius: 1rem;
}
</style>
