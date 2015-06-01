(function(){

	'use strict';

	console.log("sample 21");

	$("#btn1").click(function() {
		console.log("log clicked btn1");
		console.info("btn1 info clicked");
	});

	$("#btn2").click(function() {
		console.info("btn2 info clicked");
	});


	$("#btn3").click(function() {
		console.info("btn3 info clicked");
		// if(window.console && console.log){
	 //        var old = console.log;
	 //        console.log = function(){
	 //            Array.prototype.unshift.call(arguments, 'Report: ');
	 //            old.apply(this, arguments)
	 //        }
	 //    } 
	});

})();
