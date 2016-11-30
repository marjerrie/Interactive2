$(document).ready(function(){

	/*green*/
	$("a.gs-button").click(function(){
		$(".lightbox, .lightbox-panel").fadeIn(300);
	});

	$("a.gc-button").click(function(){
		$(".lightbox, .lightbox-panel").fadeOut(300);
	})

	/*cyan*/
	$("a.cs-button").click(function(){
		$(".lightbox, .lightbox-panel-c").fadeIn(300);
	});

	$("a.cc-button").click(function(){
		$(".lightbox, .lightbox-panel-c").fadeOut(300);
	})

	/*indigo*/
	$("a.is-button").click(function(){
		$(".lightbox, .lightbox-panel-i").fadeIn(300);
	});

	$("a.ic-button").click(function(){
		$(".lightbox, .lightbox-panel-i").fadeOut(300);
	})

	/*red*/
	$("a.rs-button").click(function(){
		$(".lightbox, .lightbox-panel-r").fadeIn(300);
	});

	$("a.rc-button").click(function(){
		$(".lightbox, .lightbox-panel-r").fadeOut(300);
	})

	/*orange*/
	$("a.os-button").click(function(){
		$(".lightbox, .lightbox-panel-o").fadeIn(300);
	});

	$("a.oc-button").click(function(){
		$(".lightbox, .lightbox-panel-o").fadeOut(300);
	})



});