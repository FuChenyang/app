<template>
  <div class="zhongheWrap">
    <div class="top1" style="padding-bottom:10px;background: white;margin-bottom:10px;">
      <div class="proWrap" style="width:100%">
        <img :src="arr9.src" alt="" style="max-width:100%;max-height:100%">
      </div>
      <div class="info">
        <div class="info1" style="text-align:left;padding-left:6px">
          <p class="info1-1" style="font-size:13px;color:black;width:270px;">
            {{arr9.name}}
          </p>
          <p class="info1-2">
            <span style="margin:11px 0;font-size:16px;color:#ee4e37;display:inline-block">
              ￥{{arr9.price}}
            </span>
            <span style="padding:0.6px;margin:0 2px;font-size:8px;color:#ee4e37;border:1px solid #ee4e37">
              {{arr9.percent}}折
            </span>
            <span style="font-size:10px;color:#333">韩国现时售价</span>
            <i style="font-size:10px;color:#666;font-style:normal;text-decoration:line-through">￥{{arr9.old}}</i>
          </p>
          <!-- <p class="info1-3">
            <span>韩国,发货后7-15个工作日送达</span>
          </p> -->
          <p class="info1-4" style="height:30px;line-height:30px;border-top:1px solid #f5f5f5">
            <span style="border-radius:3px;margin-right:5px;background:#eea252;color:white;font-size:10px">
              返
            </span>
            <span style="color:#666;font-size:12px;">购买可获<span style="color:#ee4e37">{{arr9.darling}}</span>达令币</span>
          </p>
          <p class="info1-5" style="padding:6px 0;border-top:1px solid #f5f5f5">
              <span class="xiangxi1">
                  <img src="../../assets/img/14748843803298.jpg" alt="">
              <span>
                1-3天发货
              </span>
            </span>
            <span class="xiangxi2">
              <span>
                <img src="../../assets/img/14653745047306.png" alt="">
              </span>
              <span>
                一件包邮
              </span>
            </span>
            <span class="xiangxi3">
              <span>
                <img src="../../assets/img/1460617348219.png" alt="">
              </span>
              <span>
                不支持7天退换
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="top2" style="background: white;height:116px;margin-bottom:10px;padding:5px">
      <div class="speak" style="text-align:left">
        <span style="font-size: 12px;font-weight:bold">Ta在晒（{{arr9.how}}）</span>
      </div>
      <div class="word" style="height:26px;line-height:26px;">
        <div class="word1" style="display:flex;width:100%">
          <div style="flex:1;font-size:12px;text-align: left">
            <img :src="arr9.userimg" alt="" style="width:20px;">
            {{arr9.username}}
          </div>
          <div class="time" style="flex:1;font-size: 12px;text-align: right">
            <span>{{arr9.usertime}}</span>
          </div>
        </div>
        <div class="word2">
          <p>{{arr9.usertxt}}</p>
        </div>
      </div>
    </div>
    <div class="top3" style="background: white;">
      <div class="lead">
        <div class="leadWrap" style="display: flex;width: 100%;position:relative">
          <i style="flex:1" :class="[{active:num == 1},{active1:num==1}]" @click="num = 1"><span><router-link to="/zonghe/eachimg">{{arr9.lead1}}</router-link></span></i>
          <i style="flex:1" :class="[{active:num == 2},{active1:num==2}]" @click="num = 2"><span><router-link to="/zonghe/tell">{{arr9.lead2}}</router-link></span></i>
          <!--<span>{{arr6.lead3}}</span>-->
        </div>
      </div>
      <div class="eachimg">
        <router-view></router-view>
      </div>
      <!--<div class="ads">
        <img :src="arr6.img1" alt="">
        <img :src="arr6.img2" alt="">
      </div>-->
    </div>
    
    <div class="top5" style="margin-top:10px;padding-bottom: 20px;">
      <img :src="arr9.ticket" alt="" style="max-width:100%;max-height:100%">
    </div>
    <Quick></Quick>
    <Buycar txt1="加入购物车" txt2="立即购买" :arr9="arr9">
      <div slot="pronum" class="pronum">{{carnum}}</div>
    </Buycar>
  </div>
</template>
<script>
import Buycar from '../../components/buycarlow';
import Quick from '../../components/quick';
import {mapState,mapGetters} from 'vuex'
export default {
  components:{
    Buycar,
    Quick
  },computed:{
    ...mapGetters([
      'carnum'
      ])
  },
  data:function(){
    return{
      arr8:[],
      arr9:{},
      num:1,
      Goodid:0
    }
  },
  created:function(){
    var That = this;
    this.axios.get('/api/alone')
      .then(function(res){
        That.arr8 = res.data.data;
        That.Goodid = localStorage.getItem("goodid");
        console.log(That.Goodid)
        for(var i = 0;i<That.arr8.length;i++){
          if(That.arr8[i].goodid == That.Goodid){
            That.arr9 = That.arr8[i];
          }
        }

      })
    
  }
}
</script>
<style>
.leadWrap:after{
  content:'';
  height: 2px;
  left:0;
  position:absolute;
  bottom:0;
  background:#e5e5e5;
  width:100%;
  box-sizing: border-box
}
.leadWrap i span a{font-size:10px;color:#777;text-decoration: none;}
.leadWrap i{text-align: center;display:block;height:38px;line-height:38px;position:relative;font-style: normal}
.leadWrap i:last-of-type:before{
  content:'';
  height: 22px;
  left:0;
  position:absolute;
  bottom:10px;
  background:#eee;
  width:2px;
  box-sizing: border-box
}
.leadWrap i.active span a{color:#a651b7;}
.leadWrap i.active1:after{
  content:'';
  height:1px;
  margin-left:-10px;
  left:50%;
  position:absolute;
  bottom:7px;
  background:#a651b7;
  width:20px
  }
  .zhongheWrap{background:#f5f5f5}
  .info1-5 .xiangxi1 img,.info1-5 .xiangxi2 img,.info1-5 .xiangxi3 img{width:12px;}
  .info1-5{font-size:10px;}
  .word2 p{line-height:15px;font-size:12px;color:#585858;overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}
</style>
