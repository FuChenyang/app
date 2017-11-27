<template>
  <div class="confirmWrap">
	  <div style="display:flex;width:100%;">
		  <div style="flex:5;text-align:left;font-size:14px">
			  <span>{{c1}}</span>
			  <span style="color:red">{{paysum()|capitalize}}</span>
		  </div>
		  <span style="flex:2;background:#af5bbf;font-size:12px;color:white;text-align:center">确认并付款</span>
	  </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  props:['c1'],
	
	computed:{
	  	...mapState([
	  		'buycar'
  		])
  },
  methods: {
		 paysum:function(){
	    	var sum = 0;
	    	this.buycar.forEach( function(el,i) {
	    		sum+=parseInt(el.now*el.conut)
	    	});
	    	return sum;
	    }
	},
	filters: {
  capitalize: function (value) {
    return value = "￥"+value
  }}
}
</script>

<style>
.confirmWrap{height:43px;line-height:43px;background:white;display:flex;width:100%;position:fixed;bottom:0;left:0;padding-left: 10px;box-sizing: border-box;}
</style>

