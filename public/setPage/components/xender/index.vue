<style>

	.XenderContainer {
		width:100%;
	
		overflow-x:hidden;
		margin-top:5px;
		text-align:center;
		position:relative;
	}
	
	.xender{
		width:200px;
		height:40px;
		line-height:40px;
		position:absolute;
		margin-left:-100px;
		bottom:50px;
		left:50%;
		border-radius:5px;
		background:#DEDEDE;
		box-shadow: 1px 1px 1px #B5B5B5;
	}
	
	.xenderImg{
		display:none;
		width:40px;
		line-height:40px;
	}
	
	.xenderImg img{
		width:39px;
		margin-left:5px;
	}
	
	.xenderTitle{
		width:200px;
		margin-left:20px;
		position:absolute;
	}
	
	.xenderDown{
		display:inline-block;
		width:150px;
		height:40px;
		text-align:center;
		line-height:40px;
		color:#3c3c3c;
		font-weight:500;
		background-size:40px;
	}
	
	.xenderText{
		color:#fbf7f7;
		bottom:100px;
		width:100%;
		position:absolute;
		text-align:center;
		line-height:50px;
	}
	
	.xenderText .xen{
		font-size:24px;
	}
	
	.xenderText .fast{
		font-size:16px;
	}
	
	.xenderBg{
		background:url(../../image/x_bg_hotspot_html.png) no-repeat;
		background-size:240px;
		width:100%;
		height:300px;
		position:absolute;
		margin-left:-120px;
		left:50%;
	}
	
	.imgPar{
		width:100%;
		height:300px;
		position:absolute;
		overflow:hidden;
		
	}
</style>

<template>
	<div class="XenderContainer" v-bind:style="{height:h + 'px'}">
		xender
	</div>
</template>

<script>
import xender from '../../services/xender.js'

export default {
	data () {
		return {
			imgPng:'',
			h:400,
			flag:true
		}
	},
	
	methods:{
		dxender () {
			xender.onDownLoad();
		}
	},
	
    ready () {
        xender.setThis.call(xender, this);
        xender.containerHeight();
   	},

   initBus (bus) {
      xender.regBus(bus);
   },
}

</script>