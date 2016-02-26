<style>
	.apkContainer {
		background:#fff;
		width:100%;
		overflow-y:scroll;
		position:relative;
		overflow-x:hidden;
		margin-top:3px;
		text-align:center
	}
	
	.appList {
		width:100px;
		height:110px;
		display:inline-block;
		background:#fdfafa;
		margin-left:10px;
		text-align:center;
		position:relative;
		margin-top:5px;
		overflow:hidden;
		box-shadow: 2px 2px 1px #ccc;
	}
	
	.appImg {
		width:45px;
		height:45px;
	}
	
	.appList p{
		margin:8px;
		padding:0;
	}
	
	.namecss {
		overflow:hidden;
		font-size:13px;
		white-space:nowrap;
		text-overflow:ellipsis;
		
	}
	
	.appSize{
		font-size:12px;
	}
	
	.checkedApp {
		position:absolute;
		width:100%;
		height:100%;
		background:#888888;
		opacity:0.5;
		left:0;
		top:0;
	}
	
	.backimg {
		background:url(../../image/x_ic_camera_check_pressed.png) no-repeat;
		width:50px;
		height:50px;
		background-size:50px;
		position:absolute;
		margin-left:-25px;
		z-index:3000;
		left:18px;
		top:43px;
	}

	.bodycontainer{
		display:inline-block;
		position:relative;
		margin-left:5px;
	}
	
</style>

<template>
  <div class='apkContainer' v-bind:style="{height:h + 'px'}">
  	<div>dffff</div>
    <div v-for="list in applist" class="bodycontainer">
    	sdfsdf
    	<tempbody :data="list"></tempbody>
    </div>
  </div>
  
  
</template>

<script>

import apkServer from "../../services/app/app.js"
import loading from '../loading.vue'
import tempbody from './tempbody.vue'
import waiter from '../../services/waiter.js'

export default {
 	data () {
 		return {
 			applist:[{name:1},{name:2},{name:3}],
 			h:400,
 			appw:130,
 			imgPng:[],
 			checked:[],
 			show:{
 				load:true
 			}
 		}
 	},
 	
 	methods: {
 		clickApp (obj , index , e) {
 			e.preventDefault();
 			apkServer.download(obj , index)
 		}
 	},
 	
 	ready () {
 		apkServer.setThis.call(apkServer, this);
 		apkServer.containerHeight();
 		apkServer.setApkWidth();
 		//waiter.run(apkServer , apkServer.getApkList)
 		
 	},
 	
    initBus (bus) {
      apkServer.regBus(bus);
   },
    components:{loading , tempbody}
 }
</script>
