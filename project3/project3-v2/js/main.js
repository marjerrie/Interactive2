
$(document).ready(function() {

	$( ".orange" ).click(
		function() {
  			$( ".image-g" ).click("opacity", "1");
  		}, function() {
  			$(".image-g").click("opacity", "");
  		});

	/*$(".orange").hover(
		function() {
			$(".image-g").css("opacity", "1");
		}, function() {
			$(".image-g").css("opacity", "");
		});

	/*$(".red").hover(
		function() {
			$(".image-o").css("opacity", "1");
		}, function() {
			$(".image-o").css("opacity", "");
		});

	$(".return").hover(
		function() {
			$(".return").css("opacity", "1");
		}, function() {
			$(".return").css("opacity", "");
		}
		);

	$(".return").hover(
		function() {
			$(".more").css("opacity", "1");
		}, function() {
			$(".more").css("opacity", "");
		}
		);

	$(".more").hover(
		function() {
			$(".more").css("opacity", "1");
		}, function() {
			$(".more").css("opacity", "");
		}
		);

	$(".more").hover(
		function() {
			$(".return").css("opacity", "1");
		}, function() {
			$(".return").css("opacity", "");
		}
		);*/

});