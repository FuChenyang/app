<template>
  <div class="detailWrap">
    <Search></Search>
		<div class="sortwrap">
			<div class="bao">
				<ul>
					<li :class="{active:numIndex == 0}" @click="numIndex = 0"><a >综合</a></li>
					<li :class="{active:numIndex == 1}" @click="numIndex = 1"><a href="javascript:;" @click="mySortUpnum2()">销量</a></li>
					<li :class="{active:numIndex == 2}" @click="numIndex = 2"><a href="javascript:;">新品</a></li>
					<li :class="{active:numIndex == 3}" @click="numIndex = 3"><a href="javascript:;" @click="mySortUpnow2()">价格</a></li>
					<li :class="{active:numIndex == 4}" @click="numIndex = 4"><a href="javascript:;">分类</a></li>
				</ul>
			</div>
			<div class="zongheWrap">
				<div class="all">
					<ul>
						<li v-for="(item,index) in arr6" :key="index">
							<div class="imgWrap">
							<img :src="item.src" alt="" @click ="another();getGood(item.goodid)">
							</div>
							<div class="text" @click ="another()">
							<span class="zhname">{{item.name}}</span>
							<p>{{item.contain}}</p>
							<span class="zhnow">{{item.now | capitalize}}</span>
							<i>{{item.super}}</i><br>
							<em>{{item.num}}人已加入购物车</em>
							</div>
							<div class="car">
                   <el-button :plain="true" @click="open">
                    <img @click="add(item)" src="../assets/img/goods_list_car.3fc451.png" alt=""></el-button>
							</div>
							<div class="hot">
							<img :src="item.hot" alt="">
							</div>
							<div class="tebie">
                <div class="top">
                  <a href="javascript:;"><img :src="item.src1" alt=""></a>
                  <a href="javascript:;"><img :src="item.src2" alt=""></a>
                  <a href="javascript:;"><img :src="item.src3" alt=""></a>
                  <a href="javascript:;"><img :src="item.src4" alt=""></a>
                </div>
                <div :class="{bottom:item.it == 1}" >
                  <p :class="{contain1:item.it == 1}">{{item.contain1}}</p>
                  <span :class="{contain2:item.it == 1}">{{item.contain2}}</span>
                </div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
    <Gobuyvar/>
  </div>

</template>
<script>
import MyHead from "../components/header.vue";
import Search from "../components/search.vue";
import Gobuyvar from './gobuycar.vue'
import {mapMutations} from 'vuex'
export default {
  components: {
    Search,
    Gobuyvar
  },
  data() {
    return {
      numIndex: 0,
      arr5: [],
      arr6: [],
      msg: 0
    };
  },
  created() {
    var That = this;
    this.axios.get("/api/delist").then(function(res) {
      That.msg = localStorage.getItem("id");
      That.arr5 = res.data.data;
      // console.log(That.arr5);
      for (var i = 0; i < That.arr5.length; i++) {
        if (That.arr5[i].id == That.msg) {
          That.arr6.push(That.arr5[i]);
        }
      }
    });

  },
  filters: {
  capitalize: function (value) {
    return value = "￥"+value
  }
},
  methods:{
    ...mapMutations([
      'add'
      ]),
    another: function() {
      this.$router.push("/zonghe");
    },getGood:function(val){
      localStorage.setItem("goodid",val);
    },
    mySortUpnow2: function() {
      this.arr6.sort(function(a, b) {
        return a.now - b.now;
      });
    },
    mySortUpnum2: function() {
      this.arr6.sort(function(a, b) {
        return b.num - a.num;
      });
    },
    open() {
        this.$message({
          message:'已添加到购物车',
           type: 'success'
        });
      }
  }

};
</script>
<style>
.el-message-box{
  width: 240px;
}
.sortwrap {
  /*margin-top:45px;*/
  clear: both;
  background: #fff;
}
.sortwrap ul li {
  text-align: center;
  width: 20%;
  float: left;
}
.sortwrap ul li a {
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: black;
  padding: 10px 0;
}
.sortwrap ul li.active a {
  color: red;
}
.sortwrap .bao:after{
  content: "";
  display: inline-block;
  clear: both;
}
.zongheWrap ul li .hot {
  position: absolute;
  top: 3px;
  right: 7px;
}
.zongheWrap ul li .hot img {
  width: 20px;
}
.bottom {
  background: #b05bc0;
  font-size: 10px;
  color: white;
  height: 145px;
  overflow: hidden;
  text-align: center;
}

.all {
  background: #eee;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.zongheWrap ul li {
  width: 49%;
  height: 274px;
  overflow: hidden;
  text-align: left;
  position: relative;
  background: white;
  margin: 2px 0 5px 0;
}
.contain1 {
  margin: 30px 12px 0 12px;
  overflow: hidden;
  height: 33px;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  word-wrap: break-word;
  display: box;
  display: -webkit-box;
  margin-bottom: 16px;
}
.contain2 {
  border: 1px solid wheat;
  padding: 3px;
  border-radius: 6px;
}
.imgWrap {
  height: 160px;
  overflow: hidden;
  text-align: center;
  
}
.imgWrap img {
  width: 100%;
  display: inline-block;
}
.zongheWrap ul li:nth-child(2n + 1) {
  float: left;
}
.zongheWrap ul li:nth-child(2n) {
  float: right;
}

.car img {
  width: 20px;
}

.car {
  height: 20px;
  position: absolute;
  padding: 3px;
  right: 6px;
  bottom: 32px;
  border: 1px solid #e5e5e5;
}
.car .el-button{
  padding: 0;
  border: none;
}
.text {
  margin-left: 6px;
}
.text > .zhname {
  font-size: 13px;
  color: black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
  display: block;
}
.text > p {
  display: box;
  display: -webkit-box;
  font-size: 13px;
  height: 36px;
  color: #9f9f9f;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  word-wrap: break-word;
}
.text > .zhnow {
  display: block;
  font-size: 14px;
  color: #ff5d5a;
  height: 26px;
  line-height: 26px;
}
.text em {
  font-style: normal;
  display: block;
  font-size: 12px;
  color: #9f9f9f;
  background: #f9f9f9;
  margin-left: -10px;
  text-indent: 1em;
}
.text i {
  display: inline-block;
  background: #ff5d5a;
  font-style: normal;
  font-size: 5px;
  color: white;
  border-radius: 5px;
  overflow: hidden;
  height: 13px;
  line-height: 15px;
}
.tebie {
  position: absolute;
  top: 0;
}
.tebie > .top {
  position: relative;
  width: 100%;
  height: 145px;
}
.tebie > .top > a {
  display: block;
  width: 49%;
  height: 73px;
  position: absolute;
  overflow: hidden;
}
.top > a > img {
  width: 96px;
}
.top > a:nth-child(1) {
  left: 0;
  top: 0;
}
.top > a:nth-child(2) {
  right: 0;
  top: 0;
}
.top > a:nth-child(3) {
  left: 0;
  bottom: 0;
}
.top > a:nth-child(4) {
  right: 0;
  bottom: 0;
}
</style>


