<style>
	.photoClass{
		background:#989090;
		height:150px;
		position:relative;
		overflow:hidden;
		margin:-3px 1px 0px 0 ;
		display:inline-block;
	}
	
	.imgSelect {
		width:100%;
		height:100%;
		position:absolute;
		left:0;
		top:0;
	}
	
	.bgop{
		width:100%;
		height:100%;
		background:#eee;
		opacity:0.5;
		left:0;
		top:0;
	}
	
	.imageS{
		background:url(../../image/x_ic_camera_check_pressed.png) no-repeat;
		width:50px;
		height:50px;
		background-size:70px;
		position:absolute;
		z-index:3000;
		left:50%;
		margin-left:-35px;
		margin-top:-35px;
		top:50%;
	}
</style>

<template>
  <div v-on:click="clickselect($index , $event)" class="photoClass" v-for="el in data.srcs" :style="{width:data.widths[$index] + 'px'}">
  	<img :src="el" v-on:click="dbclick()" :style="{marginLeft:data.marginLefts[$index] + 'px' , marginTop:data.marginTops[$index] + 'px' , height:data.height[$index] + 'px'}" src=""/>
  	<div class="imgSelect" v-if="data.css[$index]">
  		<p class="bgop"></p>
  		<p class="imageS"></p>
  	</div>
  </div>
</template>

<script>

import Config from '../../services/config.js'

  export default {
    
  	props:{
  		data:Object,
  		click:Object
  	},
  	
  	methods:{
  		dbclick () {
  			console.log("data:" , this)
  		},
  		
  		clickselect (index , e) {
  			e.preventDefault();
  			if(this.data.css[index]){
  				this.data.css.$set(index , '');
  			}else{
  				this.data.css.$set(index , true);
  			}
  			Config.Runtime.eventBus.emit("selectImage");
  		}
  		
  	},
  	
  	ready () {
  		
  	}
  }
</script>