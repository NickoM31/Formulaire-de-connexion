(function(){
	"use strict";
	var app = {
		
		init:function(){
			app.listeners();
		},
		listeners : function(){
			$('form').on('submit', app.recupInfo);
		},	
		recupInfo : function(){
			
			var name = $('#name').val();
			var password = $('#mdp').val();
			console.log(name,password);

		},

	};
	$(document).ready(function(){
		app.init();
	});
})();