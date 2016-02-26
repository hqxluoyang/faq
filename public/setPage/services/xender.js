import tools from './tools.js'
import download from './download.js'
import Config from './config.js'
import mvd from './mvd.js'

export default {

	setThis (self) {
		this.vm = self;
	},
	onGetXender () {
		var m = {};
		m.type = 'requestAPPList';
		m.data = 'app';
		tools.sendMsgToChannel(m);
	},
	
	loadApp (file) {

		this.hash = {};
		this.hash[file.icon] = 1;
		var m ={};
		m.type="requestFile";
		m.data = [file.icon];
		tools.sendMsgToChannel(m);
		
	},
	
	setChecked (index) {
		let self = this.vm;
		if(self.checked[index]){
			self.checked.$set(index  , "");
		}else{
			self.checked.$set(index  , "checkedApp");
		}
	},
	
	containerHeight () {
		const self = this.vm
		tools.setContainer(Config.marginTop , self);
	},
	
	arrFindVal (arr) {
		for(var i=0 ; i<arr.length ; i++){
			if(arr[i]) return true;
		}
		
		return false;
	},
	
	showDow () {
		let self = this.vm ;
		let flag = this.arrFindVal(self.checked);
		if(flag){
			Config.Runtime.eventBus.emit("showDown");
		}else{
			Config.Runtime.eventBus.emit("hideDown");
		}
	},
	
	onDownLoad (arr) {
		var  self = this.vm;
		var that = this;
		if(!self) return ;
		
		var startDown = function(){
			setTimeout(function(){
				console.log("that file:" , that.file)
				if(that.file){
					download.download({
						data:[that.file.path]
					})
				}else{
					startDown();
				}
			} , 200)
		}
		
		startDown();
		
	},
	
	download (obj , index) {
		let self = this.vm;
		
		this.setChecked(index);
		this.showDow();
		//this.downLoader(self.checked);
	},
	
	getXenderList (files) {
		for(var i=0 ; i<files.length ; i++){
			if(files[i].name =="闪传" || files[i].name == "Xender"){
				return files[i];
			}
		}
	},
	
	xender (files) {
		var xender = this.getXenderList(files);
	
		if(xender){
			this.file = xender;
			this.loadApp(xender)
		}
	},
	
	apkList (data) {
		if(!this.vm) return
		if(data.fileType == 'app' && this.vm.flag){
			this.xender(data.files);
			this.vm.flag = false
			
		}
	},
	
	onFileurl (data) {
		var self = this.vm ;
		if(!this.hash){
			this.hash={}
		}
		if(!self || data.url === undefined) return;
		var appIconPath = this.hash[data.path];
		
		if(appIconPath != undefined){
			self.imgPng = data.url;
			delete this.hash[data.path];
		}
		
	},
	
	onRouter (r) {
		if(r.path != '/xender') return;
		mvd.routeChangeS(r.path , this.vm);
	},
	
	regBus (bus) {
		bus.on("appList" , this.apkList.bind(this))
		bus.on("fileurl", this.onFileurl.bind(this));
		bus.on("getXender", this.onGetXender.bind(this));
		bus.on("router" , this.onRouter.bind(this))
		
	}
}