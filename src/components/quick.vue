<template>
  <div class="quickWrap">
	  <div id="show" @click="hehefn()">
		  <img src="../assets/img/nav-menu.62b90f.png" alt="">
	  </div>
	  <div id="hidden" :class="{hehe:hehe}">
		  <ul>
			  <li v-for="item in arr1" @click="fn(item.id)">{{item.name}}</li>
		  </ul>
	  </div>
  </div>
</template>
<script>
export default {
  data:function(){
	  return{
		  hehe:true,
		  arr1:[
			  {"name":"达令首页","id":"home"},
			  {"name":"分类","id":"kind"},
			  {"name":"购物车","id":"buycar"},
			  {"name":"个人中心","id":"mine"},
			  {"name":"浏览记录","id":"history"}
		  ]
	  }
  },
  methods:{
	  fn:function(i){
		  // console.log(i);
		  this.$router.push('/'+i);
	  },
	  hehefn(){
	  	this.hehe  = !this.hehe;
	  }  
	
  }
}
</script>
<style>
.quickWrap{position:fixed;bottom:98px;right:10px}
.quickWrap #show{position:relative}
.quickWrap #show img{width:36px;}
.quickWrap #hidden{
	box-shadow:0 0 5px rgba(0,0,0,.3);
	position:absolute;
	width:100px;
	left:-68px;
	bottom:48px;
	background:white;
	font-size: 12px;
	border-radius: 5px;
	
}
.quickWrap #hidden.hehe{
	display:none
}
.quickWrap #hidden ul li{
	height:25px;
	line-height: 25px;
	text-align: center;
	border-bottom: 1px solid #eee;
	font-size: 14px;
	padding: 5px 10px;
}
</style>

