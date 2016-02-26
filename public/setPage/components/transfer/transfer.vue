<style>
	.transfer{
		width:60px;
		height:30px;
		position:absolute;
		background:#536dfe;
		float:right;
		border-radius:6px;
		overflow:hidden;
		color:#fff;
		text-align:center;
		right:10px;
		
	}
	
	.transfer .imgp{
		background-size:30px;
		width:60px;
		line-height:30px;
	}
	
	.fadeOutTransfer {
	    position:absolute;
	   	height:0px;
	   	opacity:1;
		transition:height 0.5s;
		-moz-transition:height 0.5s; /* Firefox 4 */
		-webkit-transition:height 0.5s; /* Safari and Chrome */
		-o-transition:height 0.5s; /* Opera */
	}
	
	.fadeInTransfer {
	    position:absolute;
	   	height:30px;
	   	opacity:1;
		transition:height 0.5s;
		-moz-transition:height 0.5s; /* Firefox 4 */
		-webkit-transition:height 0.5s; /* Safari and Chrome */
		-o-transition:height 0.5s; /* Opera */
	}
	
</style>

<template>
	<div v-bind:class="inOut" class="transfer" v-on:click="transfer()">
		<p class="imgp">上传</p>
		<input style="display:none" type="file" name="Filedata" id="modelUpload"   v-on:change= "transferChange($event)"  multiple/>	
	</div>
</template>

<script>

import Config from '../../services/config.js'
import transfer from '../../services/transfer/transfer.js'

export default {
	
	data () {
		return {
			inOut:'fadeInTransfer'
		}
	},
	
	methods:{
		transfer () {
			router.go('record');
			document.getElementById("modelUpload").click();
		},
		
		transferChange (e) {
			var files = e.target.files || e.dataTransfer.files;
			Config.Runtime.eventBus.emit("upload" , {data:files});
			
		}
	},
	
	ready () {
		transfer.setThis.call(transfer, this);
       // transfer.containerHeight();
	},
	
	initBus (bus) {
      	transfer.regBus(bus);
    }
}
</script>
