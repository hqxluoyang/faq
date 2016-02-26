<style>
	.imageContainer {
		background:#fdfdfd;
		width:100%;
		height:300px;
		overflow:hidden;
		margin-top:3px;
	}
	
	.imgSpan.musicBG{
		background:url(../../image/x_ic_history_music.png) no-repeat;
		background-size:50px;
		border-radius:25px;
	}
	
	.uploadload {
		position:absolute;
		background:#2baf2b;
		left:0;
		top:56px;
		width:100px;
		height:5px;
		left:0;
	}
	
</style>

<template>
  <div id="musicContainer" class='imageContainer' v-bind:style="{height:h + 'px'}">
  	 record
  </div>
</template>

<script>

import record from '../../services/record/record.js'

export default {
	data (){
		return {
			h:40,
			recordList:[],
			base64:[]
		}
	},
	
	ready () {
		record.setThis.call(record, this);
        record.containerHeight();
	},
	
	initBus (bus) {
      	record.regBus(bus);
    },
}

</script>