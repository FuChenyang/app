<template>
  <div class="eachimgWrap">
    <ul>
      <li style="overflow:hidden">
        <img :src="arr7.img1" alt="" style="max-width:100%;max-height:100%;display:block"><img :src="arr7.img2" alt="" style="max-width:100%;max-height:100%;display:block">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data:function () {
      return{
        arr7:{},
        arr8:[],
        Goodid:0
      }
    },
    created:function(){
      var That =this;
      this.axios.get('/api/alone')
        .then(function(res){
            That.arr8 = res.data.data;
            That.Goodid = localStorage.getItem("goodid");
            console.log(That.Goodid)
            console.log(That.arr8)
            for(var i = 0;i<That.arr8.length;i++){
              if(That.arr8[i].goodid == That.Goodid){
                 That.arr7 = That.arr8[i];
                 console.log(That.arr7)
          }
        }

        })
    }
  }
</script>
