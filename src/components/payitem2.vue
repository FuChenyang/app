<template>
	<!-- 支付宝 -->
  <div class="payitem2Wrap">
	  <div class="out1">
	  	<!-- <i class="default" @click="payapp()"></i> -->
	  	<slot name="dian"></slot>	
		  <i style="flex:1;display:block;width:10px;">
			  <slot name="app"></slot>	
		  </i> 
		  <div class="right1" style="flex:5;text-align:left">
			  <p style="font-size:10px;font-weight:bold">{{txt1}}</p>
			  <p style="font-size:10px;color:#999">{{txt2}}</p>
		  </div>
	  </div>
  </div>
</template>
<script>
export default {
  props:['txt1','txt2'],
  data(){
  	return {
  		
  	}
  }
}
</script>

<style>
.payitem2Wrap{
	background: white;
	position: relative;
	padding: 10px 0;
}
.payitem2Wrap .out1{
	display: flex;
	width: 100%;
	height:40px;

}
.payitem2Wrap .out1 .default{
	background: white;
	display: block;
	width: 15px;
	height: 15px;
	border:1px solid #999999;
	border-radius: 50%;
	margin-top:5px;
	text-align: center;
	margin-left: 5px;
	position: relative;
	top: 3px;
}
.payitem2Wrap .app{
	max-width:40%;
	max-height:75%;
	position: absolute;
	top:2px;
	left:30px;
}
.payitem2Wrap .out1 .active{
	background: purple;

}

</style>

