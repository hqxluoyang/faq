<style>
	.videoCom{
		width:100%;
		height:100%;
		background:#000;
		z-index:2000;
		position:absolute;
		left:0;
		top:0;
	}
	
	.videoClose {
		background:url(../../image/t_btn_progress.png) no-repeat;
		background-size:40px;
		width:40px;
		height:40px;
		float:right;
		position:absolute;
		right:5px;
		z-index:3000;
		
	}
	
	.videoStyle{
	}
	
</style>

<template>
	<div class="videoCom" v-show="visible">
		<p class="videoClose" v-on:click="closeVideo()"></p>
		<video class="videoStyle" width="100%" height="100%" :src="videoSrc" controls="controls"></video>
	</div>
</template>

<script>
import Config from '../../services/config.js'
import playVideo from '../../services/video/playVideo.js'
export default {
	
	data () {
		return {
			visible:false,
			videoSrc:''
		}
	},
	
	methods:{
		closeVideo () {
			this.visible=false;
			this.videoSrc = '';
		}
	},
	
	ready () {
		playVideo.setThis.call(playVideo, this);
	},
	
	initBus (bus) {
      	playVideo.regBus(bus);
    },
}

</script>