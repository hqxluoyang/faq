/*
    hqx
    2016/1231
*/
import Config from './config'
import tools from './tools'
export default {
	
	onOpened () {
		console.log("opened :")
	},

	onPhoneConnected (data) {
		const bus = Config.Runtime.eventBus;
		bus.emit("login")
		Config.uploadpath = data['uploadpath'];
		console.log("phoneConnected")
	},

	onPhoneDisconnected (data) {
		console.log("phoneDisconnected")
		Config.Config.directUpload = data.url;
	},
	
	direct (data) {
		tools.Ajax.send("GET" , data.url , function(){}, function(){
			//ctCenter.show();
		});
		Config.Runtime.connect = true
	},
	
	onDirectOK () {
		Config.Runtime.connect = true
		Config.Runtime.isDirect = true;
		setTimeout(function(){
			Config.Runtime.eventBus.emit("getXender");
		} , 200)
		
	},
	
	onDirectUpload (data){
		Config.Config.directUpload = data.url;
	},

	initBus () {
        const bus = Config.Runtime.eventBus;
		bus.on("opened", this.onOpened.bind(this));
		bus.on("phoneConnected", this.onPhoneConnected.bind(this));
		bus.on("phoneDisconnected", this.onPhoneDisconnected.bind(this));
		bus.on("direct", this.direct.bind(this));
		bus.on('directOK', this.onDirectOK.bind(this));
		bus.on('directUpload', this.onDirectUpload.bind(this));
		
    },

}