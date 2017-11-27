<template>
  <div class="coptWrap">
    <div class="pic">
      <img :src="img1" alt=""/>
      <img :src="img2" alt=""/>
      <img :src="img3" alt=""/>
    </div>
    <div class="describe">
      <p>{{tbs}}<span>{{tbs2}}</span></p>
      <p>{{pse}}</p>
      <h4>{{price | capitalize}}</h4>
      <div class="shop">
        <div class="leftprop">
           <span>{{mans | ren}}</span>
        <b>加入购物车</b>
        </div>
        <img @click="add(parsd)" :src="sml" alt=""/>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  props: ["img1", "img2", "img3", "tbs", "tbs2", "pse", "price", "mans", "sml"],
  data(){
    return {
      parsd:{name:this.pse,src:this.img1,now:this.price}
    }
  },
  filters: {
    ren(va) {
      return va = parseInt(va)+"00人";
    },
    capitalize: function (value) {
    return value = "￥"+value
  }
  },
  methods: {
   ...mapMutations([
      'add'
      ])
  }
};
</script>
<style>
.coptWrap {
  width: 95%;
  margin: 0 auto;
  margin-bottom: 25px;
}
.coptWrap .pic {
  position: relative;
}
.coptWrap .pic img:nth-child(1) {
  width: 100%;
}
.coptWrap .pic img:nth-child(2),
.coptWrap .pic img:nth-child(3) {
  width: 40px;
  position: absolute;
  right: 2px;
  top: 0px;
}
.coptWrap .pic img:nth-child(2) {
  right: 47px;
}
.describe {
  position: relative;
  height: 85px;
  padding-bottom: 20px;
}
.describe p:nth-child(1) {
  font-size: 14px;
}
.describe p:nth-child(1) span {
  font-size: 10px;
  color: white;
  background-color: red;
  border-radius: 3px;
  padding: 2px;
}
.describe p:nth-child(2) {
  color: lightgrey;
  font-size: 14px;
  line-height: 25px;
  width: 80%;
}
.describe h4 {
  color: red;
  margin-top: 20px;
}
.describe .shop {
  font-size: 12px;
  padding: 3px 15px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 90px;
  color: #666;
}
.describe .shop span {
  display: block;
  width: 55px;
  /* border-right: 1px solid lightgrey; */
  font-size: 8px;
  padding-right: 5px;
  text-align: center;
}
.describe .shop span b {
  display: block;
  font-size: 10px;
  color: #666;
}
.describe .shop .leftprop {
  width: 80%;
  display: inline-block;
  border-right: 1px solid lightgrey;
}
.describe .shop img {
  top: 10px;
  position: absolute;
  width: 20px;
  right: 5px;
}
</style>
