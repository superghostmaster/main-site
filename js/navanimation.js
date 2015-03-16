/*custom js app*/
/*variable declaration*/
//hide the navigation or arrows when other is visible
var navSwap = function(){
	$("#navigation").hide(100);
	$(".arrow-btn").show(100);
}
//control scroll position on click
var scrollControl = function(divPos){
	$('html, body').animate({
		scrollTop:$(divPos).offset().top
	}, 'slow');
}
//get all nav elements
var allNavElements = "#home-down-arrow, #about, #contact-up-arrow, #about-up-arrow, #home, #about-down-arrow, #contact";

//on DOM load or refresh force page to top of window(home)
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
//hide the navigation on return scroll
$(window).scroll(function () {
  if ($(document).scrollTop() == 0) {		
		$("#navigation").hide(100);
	}
});
//on DOM load, keep menu "dark button" & nav hidden
$(document).ready(function() {
	$("#menu-button-dark, #navigation").hide();
});

//swap nav & arrow buttons from displaying
$(allNavElements).click(function(){
	navSwap();
});

$("#menu-hamburger").click(function(){
	$("#navigation, .arrow-btn").toggle(100);
});
//control scroll positions
$("#home, #about-up-arrow").click(function(){
	scrollControl("#home-top");
});
$("#home-down-arrow, #about, #contact-up-arrow").click(function(){
	scrollControl("#second-landing");
});
$("#about-down-arrow, #contact").click(function(){
	scrollControl("#third-landing");
});


