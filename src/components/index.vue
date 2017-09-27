<template>
  <div class="index">
    <img src="../assets/indexLogo.png" alt="logo">
    <p>{{ msg }}</p>
    <searchDiv></searchDiv>
    <footerDiv></footerDiv>
  </div>
</template>

<style type="text/css" scoped>
  .index {
    width: 100%;
    height: 17.66666667rem;
    min-height: 100%;
    text-align: center;
  }
  img {
    width: 2.66666667rem;
    height: 2.66666667rem;
    margin: 0 auto;
    margin-top: 1.46666667rem;
  }
  p {
    font-family: '楷体 Regular','等线Light','方正仿宋简体 Regular','仿宋 Regular','Noto SansCJK';
    font-size: .42666667rem;
    color: #516864;
    padding-top: .4rem;
  }
</style>

<script type="text/javascript">
  import footerDiv from '../components/footerDiv.vue'
  import searchDiv from '../components/searchDiv.vue'
  export default {
    name: 'index',
    data () {
      return {
        msg: '邮师有师，沟通有式'
      }
    },
    components: { searchDiv, footerDiv }
  }
</script>
