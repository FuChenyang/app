<template>
<!-- 中间的商品信息 -->
  <div class="payitemWrap">
	  <div class="wrap" style="display:flex;width:100%;">
		  <i style="padding:3px;display:block;height:40px;flex:1;border:1px solid #f5f5ff">
		 			  <img :src="paysrc" alt="" style="max-width:100%;max-height:100%">
		 </i>
		  <div class="info" style="flex:5">
		 			  <p>{{payname}}</p>
		 			  <p class="second">
		 				  <span style="color:black;float:left">{{paycon}}件</span>
		 				  <span style="color:black;float:right;margin-right:6px;color:red">{{paypri|capitalize}}</span>
		 			  </p>
		 </div>
	  </div>
  </div>
</template>
<script>

	export default{
		props:['payname','paysrc','paypri','paycon'],
			filters: {
	  		capitalize: function (value) {
	    return value = "￥"+value
	  }}
	}
</script>
<style>

.payitemWrap:after{
	content:"";
	width:98%;
	height:1px;
	position: absolute;
	left:6px;
	background:#e5e5e5;
}
.payitemWrap .info p{
	white-space: nowrap;
	width:240px;
	font-size: 10px;
	text-overflow: ellipsis;
	overflow: hidden;
	margin-top: 10px;
}
.payitemWrap .info{
	text-align: left;
	padding-left:5px;
}
.payitemWrap .info span{
	font-size: 12px;
	color:#999;
}
</style>

