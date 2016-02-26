var template = {
	getTemp: function(){
		var self = this;
		var n = tools.getParas()['name'];
		var t = decodeURI(tools.getParas()['t']);

		var opts = {
			type: 'GET',
			url: 'template?name=' + n,
			// data: { name: n },
			dataType: 'String',
			timeout: 3000,
			success: function(d){
				$('#temp-title').html(t);
				$('#temp-content').html(d);	
			},
			error: function(err){
				console.log("template ajax error!!" + err);
			}
		};
		$.ajax(opts);
	},
	init: function(){
		var self = this;

		self.getTemp();
	}
};

Zepto(function($){
	template.init();
});