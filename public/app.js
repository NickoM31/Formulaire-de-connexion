(function(){
	"use strict";
	var app = {
		
		init:function(){
		$('form').on('submit', app.recupInfo);	
		},
		
		recupInfo : function(){
			$('#name').val();
			$('#mdp').val();	
		},

	};
	$(document).ready(function(){
		app.init();
	});
})();