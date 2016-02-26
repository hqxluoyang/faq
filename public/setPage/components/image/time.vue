<style>
	.dateImg {
		height:30px;
		line-height:30px;
	}
</style>

<template>
 <div>
 	<p class="dateImg" v-if="data.srcs.length > 0">{{tt}}<span> ({{data.srcs.length}})</span></p>
 </div>
</template>

<script>
  export default {
    
  	props:{
  		tt:String,
  		data:Object
  	}
  }
</script>
