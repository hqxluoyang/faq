
<script>
import userHcomp from './user/Hcomp.vue'
import image from './image/index.vue'
import login from './login.vue'
import app from './app/index.vue'
import music from './music/index.vue'
import down from './down.vue'
import video from './video/video.vue'
import playVideo from './video/playVideo.vue'
import leftbar from './leftbar/leftbar.vue'
import xender from  './xender/index.vue'
import link from './link.vue'
import download from '../services/download.js'
import load from '../services/load.js'
import record from './record/record.vue'
import transfer from './transfer/transfer.vue'
export default {
	getComp () {
		
		return {
			userHcomp,
			image,
			login,
			app,
			download,
			music,
			video,
			playVideo,
			leftbar,
			xender,
			down,
			link,
			record,
			load,
			transfer
		}
	}
}
</script>