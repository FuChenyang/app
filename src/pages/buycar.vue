<template>
	<div class="buycarWrap">
	<el-row>
  <el-col :span="24"><div class="header">我的购物车</div>
  </el-col>
</el-row>
<el-row>
 <el-col :span="24">
 	<div class="carmain">
 	<span :class="{kong:xianshi}"></span>
 	<p :class="{dn:!xianshi}">购物车里没有东西哦,快去挑选吧~</p>
 	<el-button @click="gohome()" :class="{dn:!xianshi}">回首页</el-button>
 	<div v-for="(itt,inn) in aaabuy" class="carrow">
 		<img :src="itt.src" alt="">
 		<div class="jiage">
 			<span class="name">{{itt.name}}</span>
			<span class="contain">{{itt.contain}}</span>
			<span class="now">{{itt.now | capitalize}}</span>
			<div class="shuliangdiv">
				<button @click="changejian(inn);rejian(inn)">-</button>
				<span>{{itt.conut}}</span>
				<button @click="changejia(inn);addjia(inn)">+</button>
			</div>
			<el-button @click="delsop(inn);del(inn)" class="mychecked" type="danger" icon="el-icon-delete"></el-button>
 		</div>
 	</div>
 	</div>
</el-col>
 </el-row>
<!-- 结算 -->
  	<div class="jiesuan"><b>合计：<span>{{sum() | myflt}}</span></b>
		 <el-button class="jiesuanbtn" type="danger" @click="pay()">去结算</el-button>
  	</div>
		<Navbar></Navbar>
	</div>
</template>
<script>
import MyHead from '../components/header'
import Navbar from '../components/navbar.vue'
import {mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  components:{
	  MyHead,
		Navbar
  },
  data(){
  	return {
  		xianshi:true,
  		aaabuy:[]

  	}
  },

  created(){
  	var that = this;
	  	if (this.buycar.length != 0) {
	  		this.xianshi =!this.xianshi;
	  		this.buycar.forEach( function(element, index) {
	 			that.aaabuy.push(element)
	 		});
	  	}
	  	
  },
  updated(){
  	if (this.buycar.length == 0) {
  		this.xianshi =true;
  	}
  },
  computed:{
  	...mapState([
  		'buycar'
  		])
  },
  methods: {
  	pay(){
  		 this.$router.push("/pay");
  	},
  	delsop(innn){
  		this.aaabuy.splice(innn,1)
  	},
  	changejian(ind){
			this.$set(this.aaabuy[ind],this.aaabuy[ind].conut,this.aaabuy[ind].conut<=0?0:this.aaabuy[ind].conut-1)
			console.log(this.aaabuy[ind].conut)
    },
     changejia(ind){
	     	this.$set(this.aaabuy[ind],this.aaabuy[ind].conut,this.aaabuy[ind].conut+1)
	     	console.log(this.aaabuy[ind].conut)	

    },
  	...mapActions(['rejian','addjia']),
  	...mapMutations([
  		'del',
  		]),
    gohome () {
       this.$router.push("/");
    },
    sum(){
    	var sum = 0;
    	this.aaabuy.forEach( function(el,i) {
    		sum+=parseInt(el.now*el.conut)
    	});
    	return sum;
    }
	 
  },
  filters: {
  capitalize: function (value) {
    return value = "￥"+value
  },
  myflt(value){
  	return value = "￥"+value+".00"
  }
}
}
</script>
<style>
.buycarWrap{
	/*background: #F7F7F7;*/
}
.buycarWrap .header{
	text-align: center;
	padding: 10px 0;
	background: #fff;
	border-bottom: 3px solid #F7F7F7;
}
.buycarWrap .carmain{
	text-align: center;
	padding-bottom: 100px;
}
.buycarWrap .carmain p{
	text-align: center;
	font-size: 12px;
	color: #585659;
	margin: 20px 0;
}
.buycarWrap .kong{
	margin-top: 100px;
	display: inline-block;
	width: 70px;
	height: 80px;
	background: url(../../static/img2/cart_empty_bg1.jpg);
	-webkit-background-size: 100% 100%;
	background-size: 100% 100%;
}
.buycarWrap .carmain .carrow{
text-align: left;
box-sizing: border-box;
background: #fff;
padding: 5px 20px;
overflow: hidden;
margin-top: 10px;
margin-bottom: 10px;
border-bottom: 1px solid #eee;
}
.buycarWrap .carrow img{
	padding-top: 10px;
	display: block;
	float: left;
	width: 25%;
}
.buycarWrap .carrow .jiage .name{
	display:block;
	padding-left: 10px;
	font-size: 14px;
	width: 80%;
	line-height: 14px;
}
.buycarWrap .carrow .jiage .contain{
	width: 80%;
	display:block;
	padding-left: 8px;
	font-size: 12px;
	line-height: 12px;
	color: #585659;
	margin: 10px 0;
}
.buycarWrap .carrow .jiage .now{
	display:block;
	padding-left: 10px;
	color: red;
	font-size: 14px;
	font-weight: bold;
}
.buycarWrap .carrow .jiage{
	display: block;
	float: left;
	width: 75%;
	margin: 10px 0;
	position: relative;
}
.dn{
	display: none;
}
.buycarWrap .mychecked{
	position: absolute;
	right: 2px;
	top: 2px;
	
}
.buycarWrap .carrow .jiage .el-button{
	padding: 10px 10px;
}
.jiesuan{
	position: fixed;
	bottom: 47px;
	width: 100%;
	padding: 0px 0px 0px 25px;
	background: #FFFFFF;
	border-bottom: 1px solid #eee;
	box-sizing: border-box;
}
.jiesuan span{
	font-size: 16px;
	font-weight: bold;
	color: red;
}
.jiesuanbtn{
	float: right;
}

.buycarWrap .jiesuan .el-button{
	border-radius: 0;
}
.buycarWrap .jiesuan b{
	display: inline-block;
	position: relative;
	top: 10px;
}
.buycarWrap .jiesuan .el-button span{
	color: #fff;
}
.buycarWrap .shuliangdiv{
	width: 100px;
	float: right;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	border: 1px solid #d8dce5;
}
.buycarWrap .shuliangdiv button{
	border: none;
	outline: none;
	padding: 2px 5px;
	flex: 1;
	background: #f5f7fa;
	color: #5a5e66;
	display: block;
	

}
.buycarWrap .shuliangdiv button:hover{
	color: red !important;
}
.buycarWrap .shuliangdiv button:nth-child(1){
	border-right: 1px solid #d8dce5;
}
.buycarWrap .shuliangdiv button:nth-of-type(2){
	border-left: 1px solid #d8dce5;
}
.buycarWrap .shuliangdiv span{
	flex: 1;
	text-align: center;
	padding: 0 3px;
	color: #5a5e66;
	font-size: 14px;
}
</style>
