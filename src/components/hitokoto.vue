<template>
  <div class="hitokoto">
    <div class="content">
      <p>『</p>
      <p>{{ msg }}</p>
      <p>』</p>
    </div>
    <div id="logo">
      <img src="../assets/brandLogo.png" alt="邮师录">
    </div>
    <footerDiv></footerDiv>
  </div>
</template>

<style type="text/css" scoped>
  .hitokoto {
    position: relative;
    width: 100%;
    height: 17.66666667rem;
    background: url('../assets/background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .content {
    width: 80%;
    height: auto;
    position: absolute;
    margin: auto;
    top: 30%;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
  .content p {
    font-size: .48rem;
    line-height: .74666667rem;
    color: #fff;
  }
  .content p:nth-child(1) {
    text-align: left;
  }
  .content p:nth-child(2) {
    text-indent: 2em;
  }
  .content p:nth-child(3) {
    text-align: right;
    padding-top: -.48rem;
  }
  #logo {
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    right: 0;
    width: 1.86666667rem;
    height: .58666667rem;
    margin: 0 auto;
  }
</style>

<script type="text/javascript">
  import footerDiv from '../components/footerDiv.vue'
  export default {
    name: 'hitokoto',
    data () {
      return {
        msg: '',
        apiUrl: 'http://api.hitokoto.cn/'
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init: function () {
        this.$http.get(this.apiUrl).then((response) => {
            this.msg = response.body.hitokoto
        })
      }
    },
    components: { footerDiv }
  }
  // getMsg()
</script>
