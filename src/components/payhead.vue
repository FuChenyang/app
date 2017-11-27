<template>
  <div class="payheadWrap" :class="{short:bol1}">
	  <span style="padding-left:10px" :class="{red:bol}">{{text1}}</span>
	  <slot name="down"></slot>
	  <slot name="right"></slot>
	  <span class="rightnow">{{text2}}</span>
  </div>
</template>
<script>
export default {
  props:['text1','text2','bol','bol1']
}
</script>
<style>
.payheadWrap{
	position: relative;
	text-align:left;
	font-size: 14px;
	color:#999;
	height:43px;
	line-height:43px;
	border-bottom: 1px solid #e5e5e5;
	}
.payheadWrap .down{
	width: 9px;
	height:9px;
	border: 1px solid #858385;
	display:inline-block;
	position: absolute;
	transform: rotate(45deg);
	top: 12px;
	border-top:none;
	border-left:none;
	right:10px;
	}
.payheadWrap .right{
	content:'';
	width: 7px;
	height:7px;
	border: 1px solid #858385;
	display:inline-block;
	position: absolute;
	transform: rotate(-45deg);
	top:10px;
	border-top:none;
	border-left:none;
	right:10px;
}
.payheadWrap .red{
	color:#f0593f;
	font-size: 12px;
}
.short{
	height:30px;
	line-height:30px;
	border: none
}
.payheadWrap .rightnow{
	color:#f0593f;
	font-size: 12px;
	float:right;
	margin-right:20px;
}
</style>


