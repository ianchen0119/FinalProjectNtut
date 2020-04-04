<template>
<div class="footer container">
    <div class="row">
        <div class="col-sm">
            <a href="#" class="badge badge-primary">IThome</a>
            <a href="#" class="badge badge-success">Vue.js</a>
            <a href="#" class="badge badge-warning">Bootstrap</a>
            <a href="#" class="badge badge-dark">GitHub</a>
        </div>
        <div class="col-sm">
            <div>
                <a href="https://nportal.ntut.edu.tw/index.do?thetime=1581064956648">校園入口網站</a>
            </div>
            <div>
                <a href="https://www.ntut.edu.tw/">北科大</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'Footer'
}
</script>>
<style lang="scss" scoped>
.footer{
    a{
        text-decoration: none;
    }
    .badge{
        margin-right: 2px;
    }
}
</style>
