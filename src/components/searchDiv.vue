<template>
  <div id="searchDiv">
    <form action="##" method="get" accept-charset="utf-8">
      <input type="text" name="search" :value="holder" @focus="placeholder()"/>
      <img id="searchBtn" src="../assets/search.png" alt="搜索">
    </form>
  </div>
</template>

<script>
  var isFirst = true
  export default {
    name: 'searchDiv',
    data () {
      return {
        holder: '输入老师姓名'
      }
    },
    methods: {
      placeholder: function () {
        if (isFirst) {
          this.holder = ''
          isFirst = false
        }
      }
    }
  }
</script>

<style scoped type="text/css">
  #searchDiv {
    margin-top:.85333333rem;
    width: 100%;
    background-color: #f1f1f1;
  }
  form {
    float: right;
    width: 95%;
    margin-right: .24rem;
    margin-top: .24rem;
  }
  form input {
    width: 95%;
    height: .77333333rem;
    opacity: .749;
    border: none;
    border-radius: .38rem;
    background-color: #9fadab;
    color: #fff;
    margin: 0 auto;
    padding-left: 2%;
  }
  #searchBtn {
    position: relative;
    float: right;
    margin: 0;
    top: -.5333rem;
    /*line-height: .77333333rem;*/
    width: .29333333rem;
    height: .30666667rem;
    margin-right: .4rem;
  }
</style>
