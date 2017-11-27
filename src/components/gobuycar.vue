<template>	
<div class="gobuycarWarp" @click="gobuycar">
	<img src="../../static/img2/cart_small.1914b3.png" alt="">
</div>
</template>
<script>
	export default{
		methods: {
		  gobuycar () {
		  	sessionStorage.setItem("sela","buycar")
		    this.$router.push("/buycar");
		  }
		}
	}
</script>
<style>
	.gobuycarWarp {
		width: 50px;
		height: 50px;
		position: fixed;
		bottom: 20px;
		right: 20px;
		border-radius: 50%;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		background: #fff;
		

	}
	.gobuycarWarp img{
		width: 100%;
		height: 100%;
		margin: auto;
		

	}
</style>