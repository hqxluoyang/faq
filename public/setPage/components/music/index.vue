<style>
	.imageContainer {
		background:#fdfdfd;
		width:100%;
		height:300px;
		overflow-y:scroll;
		overflow-x:hidden;
		margin-top:3px;
	}
	
	.imgSpan.musicBG{
		background:url(../../image/x_ic_history_music.png) no-repeat;
		background-size:50px;
		border-radius:25px;
	}

	.vueEditor{

		position:absolute;
		left:110px;
		top:56px;
		
	}

	.inputHeader{
		width:100%;
		height:50px;
		margin-left:10px;
	}
	
</style>

<template>
  <div id="musicContainer" class='imageContainer' v-bind:style="{height:h + 'px'}" v-on:scroll="scrollFun">
  	<div class="inputHeader">
  		<form class="form-inline">
		  <div class="form-group">
		    <label for="exampleInputName2">模板</label>
		    <input type="text" v-bind:value="value" class="form-control" id="exampleInputName2" placeholder="模板">
		  </div>
		  <button v-on:click="clickUpload()" class="btn btn-default">保存模板</button>
        </form>
  	</div>
  	<div class="vueEditor">
  		<vueeditor model=""></vueeditor>
  	</div>
  	 
      <div style="margin-top:40px">
    
    <phone :data="text"></phone>
  </div>
  </div>
</template>

<script>
import music from '../../services/music/music.js'
import waiter from '../../services/waiter.js'
import check from '../check.vue'
import mlist from './mlist.vue'
import vueeditor from 'vue-html-editor/src/vue-html-editor.js'
import loading from '../loading.vue'
import phone from './iphone.vue'
import uploadStr from '../../services/uploadStr.js'

export default {
	
	data () {
		return {
			h:400,
			imgPng:[],
			musicList:[],
			musicName:[],
			selectCss:{
				data:[]
			},
			value:"moban",
			text:"hellow world",
			show:{
				load:true
			}
		}
	},
	
	ready () {
		music.setThis.call(music, this);
        music.containerHeight();
        waiter.run(music , music.getMusicList)
	},
	
	methods:{
		selectChecked (index , e) {
			e.preventDefault();
			music.setSelect(index);
		},
		
		scrollFun () {
			music.scrollAddMusic('musicContainer');
		},

		clickUpload () {
			var value = document.getElementById("exampleInputName2").value
			//console.log("upload this.text:" , value , this.value)
			if(!value){
				alert("模板名不能为空");
				return;
			}
			//music.getTemplate();
			console.log("up load html")
			uploadStr.upload(this.text , value)
		}
	},
	
	initBus (bus) {
      	music.regBus(bus);
    },
   
	components: {check , mlist , loading , vueeditor , phone}
}

</script>