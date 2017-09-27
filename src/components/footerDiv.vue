<template>
  <div id="footerDiv">
    <router-link to="/index">
      <div>
        <img src="../assets/uteacher.png" alt="邮师录"> 
      </div>
      <p>邮师录</p>
    </router-link>
    <router-link to="/property">
      <div>
        <img src="../assets/otherContact.png" alt="事务联系">
      </div>
      <p>事务联系</p>
    </router-link>
    <router-link to="/hitokoto">
      <div>
        <img src="../assets/hitokoto.png" alt="一言">
      </div>
      <p>一言</p>
    </router-link>
    <router-link to="/my">
      <div>
        <img src="../assets/my.png" alt="我的">
      </div>
      <p>我的</p>
    </router-link>
  </div>
</template>

<style type="text/css" scoped>
  #footerDiv {
    width: 100%;
    height: 1.333333rem;
    border-top: 1px solid #97a2a0;
    position: fixed;
    bottom: 0;
    background: #fff;
  }
  a {
    display: inline-block;
    width: 25%;
    height: inherit;
    float: left;
    text-decoration: none;
    text-align: center;
  }
  a div {
    margin: 0 auto;
    width: .9066667rem;
    height: .9066667rem;
    text-align: center;
    line-height: .9066667rem;
  }
  img {
    vertical-align: middle;
  }
  p {
    color: #6a7672;
  }
</style>
