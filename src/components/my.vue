<template>
  <div class="my">
    <div class="myDetail">
      <img src="../assets/headPortrait.png" alt="头像">
      <p>走错说爱你</p>
    </div>
    <ul>
      <li>
        <img src="../assets/collection.png" alt="我的收藏"><span>我的收藏</span>
      </li>
      <li>
        <img src="../assets/history.png" alt="历史搜索"><span>历史搜索</span>
      </li>
      <li>
        <img src="../assets/feedback.png" alt="反馈"><span>反馈</span>
      </li>
      <li>
        <img src="../assets/about.png" alt="关于"><span>关于</span>
      </li>
    </ul>
    <footerDiv></footerDiv>
  </div>
</template>

<style type="text/css" scoped>
  .my {
    width: 100%;
    height: 17.66666667rem;
    background: #f1f1f1;
  }
  .myDetail {
    font-size: .42666667rem;
    width: 2.4rem;
    height: 4rem;
    margin: 0 auto;
    padding-top: 1.12rem;
    text-align: center;
    color: #70807d;
  }
  .myDetail p {
    line-height: 1.2rem;
    font-weight: 700;
  }
  li {
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    text-align: left;
    border-bottom: 1px solid #afb7b6;
    background: #fff;
    font-size: 0;
  }
  li:nth-child(1) {
    border-top: 1px solid #afb7b6;
  }
  li span {
    vertical-align: middle;
    font-size: .42666667rem;
    padding-left: .45333333rem;
    color: #70807d;
    font-weight: 700;
  }
  li img {
    padding-left: .45333333rem;
    vertical-align: middle;
  }
</style>

<script type="text/javascript">
  import footerDiv from '../components/footerDiv.vue'
  export default {
    name: 'my',
    components: { footerDiv }
  }
</script>
