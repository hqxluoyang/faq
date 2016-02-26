	<style>
		.view {
		  transition: all .5s ease;
		}
		.test-enter, .test-leave {
		  opacity: 0;
		  transform: translate3d(10px, 0, 0);
		}
		.v-link-active {
		  color: red;
		}
		[v-cloak] {
		  display: none;
		}
	</style>
	
	<template>
	  <div>
	  	<top></top>
	    <leftbar></leftbar>
	    <container></container>
	    <login></login>
	    <playvideo></playvideo>
	    <downpanel></downpanel>
	    
	  </div>
	  
	</template>
	
	<script>
		import login from './components/login.vue'
		import top from './components/top.vue'
		import downpanel from './components/down.vue'
		import playvideo from './components/video/playVideo.vue'
		import leftbar from './components/leftbar/leftbar.vue'
		import transfer from './components/transfer/transfer.vue'
		import container from './components/container.vue'
		
		export default {
		  components:{login , top ,downpanel , playvideo , leftbar , transfer , container}
		}
	</script>
