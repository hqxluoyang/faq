<style>
	.musicLine {
		height:50px;
		line-height:50px;
		margin-top:1px;
		position:relative;
		color:#5f5f5f;
	}
	
	.musicLine .musicBox {
		display:inline-block;
		float:right;
		margin-top:15px;
		margin-right:10px;
	}
	
	.musicLine .ullist {
		display:inline-block;
		margin:0;
		padding:0;
		margin-top:5px;
		line-height:initial;
	}
	
	.musicLine .ullist .lilist {
		height:20px;
		margin:0;
		padding:0;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
		width:180px;
		list-style:none;
	}
	
	.musicLine .textContai {
		display:inline-block;
		width:50px;
	}
</style>
<template>
	<div class="musicLine">
		<span class="imgSpan"></span>
		<ul class="ullist">
			<li class="lilist">{{mdata['name']}}</li>
			<li class="lilist">{{mdata['size']}}</li>
		</ul>
		<span class="musicBox"></span>
	</div>
</template>

<script>
  export default {
    
  	props:{
  		mdata:Object
  	},
  	
  	ready () {
  		//console.log("this props:" , this.props , this.data)
  	}
  }
</script>