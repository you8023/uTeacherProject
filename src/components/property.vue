<template>
  <div class="property">
    <ul>
      <li>
        <div>
          <img src="../assets/property.png" alt="物业维修中心">
        </div>
        <p>物业维修中心</p>
        <input type="tel" value="62461000" readonly="readonly" />
        <input type="tel" value="62461241" readonly="readonly" />
      </li>
      <li>
        <div>
          <img src="../assets/hospital.png" alt="校医院夜间急诊">
        </div>
        <p>校医院夜间急诊</p>
        <input type="tel" value="62460120" readonly="readonly" />
        <input type="tel" value="13372712783" readonly="readonly" />
      </li>
      <li>
        <div>
          <img src="../assets/deansOffice.png" alt="教务处">
        </div>
        <p>教务处</p>
        <input type="tel" value="62486877" readonly="readonly" />
      </li>
      <li>
        <div>
          <img src="../assets/network.png" alt="网络报修">
        </div>
        <p>网络报修</p>
        <input type="tel" value="62461295" readonly="readonly" />
      </li>
      <li>
        <div>
          <img src="../assets/airConditioner.png" alt="空调报修">
        </div>
        <p>空调报修</p>
        <input type="tel" value="65012181" readonly="readonly" />
        <input type="tel" value="65012956" readonly="readonly" />
      </li>
      <li>
        <div>
          <img src="../assets/heating.png" alt="集中供热报修">
        </div>
        <p>集中供热报修</p>
        <input type="tel" value="13452178759" readonly="readonly" />
      </li>
    </ul>
    <footerDiv></footerDiv>
  </div>
</template>
<style type="text/css" scoped>
  .property {
    width: 100%;
    height: 17.66666667rem;
  }
  ul {
    list-style: none;
  }
  li {
    float: left;
    box-sizing: border-box;
    width: 50%;
    height: 4.13333333rem;
    text-align: center;
    background: #ffffff;
    border-right: 1px solid #afb7b6;
    border-bottom: 1px solid #afb7b6;
  }
  li:nth-child(2n) {
    border-right: 0;
  }
  li div {
    line-height: 2.24rem;
    width: 2.24rem;
    height: 2.24rem;
    margin: 0 auto;
    text-align: center;
  }
  img {
    vertical-align: middle;
  }
  p {
    font-size: .37333333rem;
    font-weight: 700;
    padding-bottom: .32666667rem;
    color: #3e6059;
  }
  input {
    display: inline;
    text-align: center;
    font-size: .37333333rem;
    line-height: .48rem;
    color: #595959;
    border: none;
  }
</style>
<script type="text/javascript">
  import footerDiv from '../components/footerDiv.vue'
  export default {
    name: 'property',
    components: { footerDiv }
  }
</script>
