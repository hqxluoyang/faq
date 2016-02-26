<style>
	.imageContainer {
		background:#fff;
		width:100%;
		overflow-y:scroll;
		overflow-x:hidden;
		margin-top:46px;
	}
	
	.loadCss{
	}
</style>

<template>
  <div  id="imgtemplate" class='imageContainer' v-bind:style="{height:h + 'px'}" v-on:scroll="scrollFun">
  	<div v-for="album in Albums">
  		<time :data="album" :tt='album.title'></time>
  		<reimg :data="album"></reimg>
  	</div>
  	<loadfram :data="show"></loadfram>
  </div>
</template>

<script>

import tools from  '../../services/tools.js'
import image from '../../services/image/image.js'
import waiter from "../../services/waiter.js"
import reimg from './reimg.vue'
import time from './time.vue'
import loadfram from '../loading.vue'

export default {

   data () {
      return {
         Albums:[],
         h:400,
         msg:[],
         show:{
         	load:true
         }
      }
   },

   methods : {
      scrollFun () {
      	image.scrollAddImage("imgtemplate");
      }
   },


   ready () {
      image.setThis.call(image, this);
      image.containerHeight();
      waiter.run(image , image.getImageList)
   },

   initBus (bus) {
      image.regBus(bus);
   },

   components:{reimg , time , loadfram}

}
</script>
