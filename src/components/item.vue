<template>
  <div class="itemWrap" @click="fn()">
	  <span v-show="bol"><slot name="normalImg"></slot></span>
	  <span v-show="!bol"><slot name="activeImg"></slot></span>
	  <p :class="{color:!bol}">{{txt}}</p>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
	data:function(){
		return{
			f:'home'
		}
	},
	props:['txt','mark'],
	created:function(){
		if (sessionStorage.getItem("sela")) {
			this.f = sessionStorage.getItem("sela")
		}
	},
	computed:{
		  	...mapState([
  		'login'
  		]),
       bol:function(){
		   if(this.mark == this.f){
			   return false
		   }
		   return true
	   }
	},
	methods:{
		fn:function(){
			this.$emit("change",this.mark)
			if (this.login == true) {
				this.$router.push('/min2')
			}
			this.$router.push('/'+this.mark)
			
		}
	}
}
</script>
<style>
.itemWrap{
	width:20%;
	float: left;
	text-align: center;
	padding-top: 5px;
}
.itemWrap img{
	width:23px
}
.itemWrap p{
	font-size:5px;
	line-height:10px
}
.color{
	color:purple;
}
</style>

