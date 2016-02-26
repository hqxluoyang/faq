<style>
.top{
	position:absolute;
	width:100%;
  padding-left:100px;
  margin:0 auto;
	height:60px;
	top:0;
    box-shadow: 0px 1px 5px #888888;
}

.top .titleName{
  text-align:center;
  margin-top:16px;
  margin-left:-100px;
}
</style>

<template>
  <div class='top'>
  	<p class="titleName">Xender后台配置界面</p>
  </div>
</template>


<script>
import link from './link.vue'
import titlecom from './title.vue'
export default {

   ready () {
   	
   },
  
  components:{link , titlecom}
}
</script>