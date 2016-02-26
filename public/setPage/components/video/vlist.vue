<style>
	.musicLine {
		height:50px;
		line-height:50px;
		margin-top:1px;
		color:#5f5f5f;
	}
	
	
	.musicLine .ullist {
		display:inline-block;
		margin:0;
		padding:0;
		margin-top:5px;
		margin-left:20px;
		line-height:initial;
	}
	
	.musicLine .ullist .lilist {
		height:20px;
		margin:0;
		padding:0;
		list-style:none;
	}
	
	.musicLine .ullist .fontSize{
		height:20px;
		margin:0;
		padding:0;
		list-style:none;
		font-size:12px;
		margin-top:2px;
	}
	
	.musicLine .textContai {
		display:inline-block;
		width:50px;
	}
</style>
<template>
	<div class="musicLine">
		<span class="imgSpan"><img v-bind:src="imgData[imgIndex]" /></span>
		<ul class="ullist">
			<li class="lilist">{{mdata['name']}}</li>
			<li class="fontSize">{{mdata['size']}}</li>
		</ul>
		<div class="musicBox">
			<check></check>			
		</div>
	</div>
</template>

<script>

import check from './check.vue'

  export default {
    
  	props:{
  		mdata:Object,
  		imgData:Array,
  		imgIndex:Number
  	},
  	
  	ready () {
  		console.log("this props:" , this, this.data)
  	},
  	
  	components: {check}
  }
</script>