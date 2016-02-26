<style>
	.imageContainer {
		background:#fdfdfd;
		width:100%;
		height:300px;
		overflow-y:scroll;
		overflow-x:hidden;
		margin-top:3px;
	}
	
	.imageContainer hr{
		margin-left:80px;
	}
	
	.videoImgCss{
		width:50px;
		height:50px;
	}
	
	.musicLine {
		height:50px;
		line-height:50px;
		margin-top:1px;
		margin-left:10px;
		margin-right:1px;
		color:#5f5f5f;
	}
	
	.musicLine .imgSpan {
		display:inline-block;
		width:50px;
		height:50px;
		float:left;
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
	
	.musicLine .ullist .lilist.fontSize {
		font-size:12px;
		margin-top:5px;
	}
	
	.musicLine .textContai {
		display:inline-block;
		width:50px;
	}
</style>

<template>
  <div class='imageContainer' v-bind:style="{height:h + 'px'}">
  	<vuetable header="" :data="videoList"></vuetable>
  </div>
</template>

<script>
import video from '../../services/video/video.js'
import check from '../check.vue'
import vuetable from './vue-table.vue'
import Config from '../../services/config.js'
import waiter from '../../services/waiter.js'
import loading from '../loading.vue'

export default {
	
	data () {
		return {
			h:400,
			videoList:[],
			selectCss:{
				data:[]
			},
			
			show:{
				load:true
			}
		}
	},
	
	ready () {
		video.setThis.call(video, this);
		//video.getVideoList();
        video.containerHeight();
        video.getVideoList();
        //waiter.run(video , video.getVideoList);
	},
	
	methods:{
		selectChecked (index , e) {
			e.preventDefault();
			video.setSelect(index);
		},
		
		play (obj) {
			video.playStart(obj);
		}
	},
	
	initBus (bus) {
      	video.regBus(bus);
    },
   
	components: {check ,  loading , vuetable}
}

</script>