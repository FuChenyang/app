<template>
  <div class="payWrap">
	  <div class="title" style="height:25px;line-height:25px;background:#f5f5f5">
		  <p>已注册达令并保存过地址？<span>马上登录</span></p>
	  </div>
	  <div class="letter">
		  	<Payhead text1="收货人姓名"></Payhead>
	  		<Payhead text1="收货人手机号码"></Payhead>
	  		<Payhead text1="选择省市区">
		  	<span slot="down" class="down"></span>
	  		</Payhead>
	  		<Payhead text1="详细街道地址"></Payhead>
	  </div>
	  <div class="product" style="margin:10px 0;background:white">
		  <Payitem v-for="payitem in buycar" :payname="payitem.name" :paysrc="payitem.src" :paypri="payitem.now" :paycon="payitem.conut"></Payitem>
		  <Payhead text1="优惠券11.25-12.25" text2="马上领取" :bol="bol" :bol1="bol1">
			  <span slot="right" class="right"></span>
		  </Payhead>	
	  </div>
	  <p style>选择支付方式</p>
	  <div class="which" style="width:100%">
		  <Payitem2 txt1="支付宝支付（推荐）" txt2="支持花呗付款">
		  	<i slot="dian" class="default" :class="{active:payappicon}" @click="paychange()"></i>
			  <img src="../assets/img/appalipay_international.png" alt="" slot="app" class="app">
		  </Payitem2>
		  <Payitem2 txt1="财付通支付" txt2="使用财付通账户支付">
		  	<i slot="dian" class="default" :class="{active:!payappicon}" @click="paychange()"></i>
			  <img src="../assets/img/tenpay.png" alt="" slot="app" class="app">
		  </Payitem2>
	  </div>
		<Confirm c1="应付金额:"></Confirm>
  </div>
</template>
<script>
import Payhead from '../components/payhead'
import Payitem from '../components/payitem'
import Payitem2 from '../components/payitem2'
import Confirm from '../components/confirm'
import {mapState} from 'vuex'
export default {
	components:{
		Payhead,
		Payitem,
		Payitem2,
		Confirm
	},
	computed:{
	  	...mapState([
	  		'buycar'
  		])
  },
  create(){
  
  },
	data:function(){
		return{
			bol:true,
			bol1:true,
			payappicon:true

		}
	},
	methods: {
	  paychange () {
	    this.payappicon = !this.payappicon
	  }
	}
	
}
</script>
<style>
.payWrap{background:#f5f5f5}
.payWrap .letter{background: white}
.payWrap .title p{font-size: 10px;color:black;text-align: center;
}
.payWrap .title p span{color:blueviolet}
.payWrap .letter:before,.payWrap .letter:after{
	content:"";
	width:100%;
	height:5px;
	position: absolute;
	left:0;
	background: url("../assets/img/下载.png") repeat-x;
	background-size:100% 3px;
}

</style>


