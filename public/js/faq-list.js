var faqList = {
	lang: tools.getLang(),
	setHeader: function(){
		var searchDown = $('#search-down');
		var searchUp = $('#search-up');
		var searchInput = $('#search-down input').first();

		var cut = function(show){
			if(show == '1'){
				$(searchUp).css('display', 'none');
				$(searchDown).css('display', 'table');
			}else{
				$(searchUp).css('display', 'block');
				$(searchDown).css('display', 'none');	
			}
		};

		searchUp.on('click', function(){
			cut(1);
		});

		$(searchInput).first().on('blur', function(){
			// cut(0);
		});

		$('#search-cancel').on('click', function(){
			cut(0);
		});

		$('#search-clear').on('click', function(e){
			if(e.sttopPropagation)
				e.sttopPropagation();
			$(searchInput).val('');
		});
	},

	getList: function(){
		var self = this;
		$.getJSON('list', function(data){
			var dt = '<dt>' + languages[self.lang]['list-title'] + '</dt>';
			var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"/></svg>';
			var dd = '';

			for(var i = 0; i < data.length; i ++){
				dd += '<dd>' + 
					  	'<a href="template.html?name=' + data[i]['template'] + '&t=' + data[i]['title'] + '">' +  
					  		data[i]['title'] + 
					  		svg + 
					  	'</a>' +
					  '</dd>'
			}

			$('#list').html(dt + dd);
		});
	},

	setFooter: function(){
		var self = this;

		var listItem = $("#button-c li");

		for(var i = 0; i < listItem.length; i++){
			$(listItem[i]).on('click', function(){
				var x = Math.random(1) * 10 + i;
				console.log('x = ' + x);
			});
		}
	},

	init: function(){
		var self = this;

		self.getList();
		self.setHeader();
		self.setFooter();
	}
};

Zepto(function($){
	console.log('hello ' + languages['en']['t'] + '!!!!');

	faqList.init();
});
