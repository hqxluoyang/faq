
<style>
	.leftBar{
		height:100%;
		left:0;
		top:0;
		position:absolute;
		background:#292929;
		width:0;
	}
	
	.fadeOutLeftbar {
	    position:absolute;
	    height:100%;
	    background:#292929;
	    left:0;
		top:0;
	   	width:0px;
	   	opacity:1;
		transition:width 0.5s;
		-moz-transition:width 0.5s; /* Firefox 4 */
		-webkit-transition:width 0.5s; /* Safari and Chrome */
		-o-transition:width 0.5s; /* Opera */
	}

	.fadeInLeftbar {
	    position:absolute;
	    height:100%;
	    background:#292929;
	    left:0;
		top:0;
	   	width:100px;
	   	z-index:100;
	   	opacity:1;
		transition:width 0.5s;
		-moz-transition:width 0.5s; /* Firefox 4 */
		-webkit-transition:width 0.5s; /* Safari and Chrome */
		-o-transition:width 0.5s; /* Opera */
	}
	
</style>

<template>
	<div class="fadeInLeftbar">
		<link></link>
	</div>
</template>

<script>
import leftbar from '../../services/leftbar/leftbar.js'
import link from '../link.vue';
export default {
	
	data () {
		return {
			leftState:'fadeInLeftbar'
		}
	},
	
	methods:{
		touchend () {
			this.leftState = "fadeOutLeftbar"
		},
		
		touchmove () {
			//console.log()
		}
	},
	
	ready () {
		leftbar.setThis.call(leftbar, this);
	},
	
	initBus (bus) {
      	leftbar.regBus(bus);
    },

    components : {link}
}

</script>