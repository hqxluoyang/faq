var tools = {
	getUA: function(){
		return navigator.userAgent.toLowerCase();
	},
	
	isAndroid: function(){
		var ua = tools.getUA();
		return (/android/i.test(ua)) ? true : false;
	},
	
	isBlackBerry: function(){
		var ua = tools.getUA();
		return (/blackberry/i.test(ua)) ? true :false;
	},
	
	isIOS: function(){
		var ua = tools.getUA();
		return (/iphone|ipad|ipod|iwatch/i.test(ua)) ? true : false;
	},
	
	isIphone: function(){
		var ua = tools.getUA();
		return (/iphone/i.test(ua)) ? true : false;
	},
	
	isIpad: function(){
		var ua = tools.getUA();
		return (/ipad/i.test(ua)) ? true : false;
	},
	
	isWindows: function(){
		var ua = tools.getUA();
		return (/iemobile/i.test(ua)) ? true : false;
	},
	
	isAny: function(){
		return (tools.isAndroid() || tools.isBlackBerry() || tools.isIOS() || tools.isWindows());
	},

	getLang: function(){
		var language = typeof navigator === 'undefined' ? language.defaultLang : (navigator.language || navigator.userLanguage || language.defaultLang).toLowerCase();
		var langArr = language.split('-');
		var lang = '';
		var langObj = {};
		
		if(language.indexOf('-') > -1){
			switch(langArr[0]){
				case 'en':
					lang = 'en';
					break;
				case 'zh':
					if(langArr[1] === 'cn'){
						lang = 'cn';
					}else{
						lang = 'tw';
					}
					break;
					
				default:
					lang = 'en';
					break;
			}
		}else{
			lang = language;
		}
		
		return lang;
	},

	getParas: function(){
		var url = location.search; //获取url中"?"符后的字串
	   	var theRequest = new Object();
	   	if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i ++) {
				theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
};