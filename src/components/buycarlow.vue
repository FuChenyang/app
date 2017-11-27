<template>
  <div class="buycarlowWrap">
	  <slot name="pronum"></slot>
	  <i @click="gobuycar"><img src="../assets/img/goods_list_car.3fc451.png" alt=""></i>
	  <span>{{txt1}}</span>	
	  <em @click="add(arr9)">{{txt2}}</em>	
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  props:['txt1','txt2',"arr9"],
  methods: {
    gobuycar () {
      sessionStorage.setItem("sela","buycar")
      this.$router.push('/buycar');
    },
        ...mapMutations([
      'add'
      ]),
  }
}
</script>
<style>
.buycarlowWrap{height:43px;line-height:43px;background:white;display:flex;width:100%;position:fixed;bottom:0;left:0}
.buycarlowWrap i{flex:2;text-align:left;margin:10px;}
.buycarlowWrap i img{width:23px}
.buycarlowWrap span{text-align: center;padding:0 12px;background:#af5bbf;flex:1;font-size:12px;color:white}
.buycarlowWrap em{text-align: center;padding:0 15px;background:#6e3594;flex:1;font-size:12px;color:white;font-style:normal}
.buycarlowWrap .pronum{text-align: center;cursor: pointer;background:#f0593f;position:absolute;width:10px;height:10px;line-height:10px;padding:2px;color:white;border-radius:50%;font-size:10px;left:26px;top:3px}
</style>


