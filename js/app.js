/*custom js app*/


//on DOM load or refresh force page to top of window(home)
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

//on DOM load, keep menu "dark button" & nav hidden
$(document).ready(function() {
	$("#menu-button-dark, #navigation").hide();
});

//show nav menu when hamburger icon is clicked
$("#menu-hamburger").click(function() {
	/* Act on the event */
	$("#navigation, .arrow-btn").fadeToggle('fast');
});

//hide the light hamburger, show the dark hamburger and nav to about page position
$("#home-down-arrow, #about, #contact-up-arrow").click(function() {
	/* Act on the event */
	$("#menu-button").fadeToggle(200,  function() {
		$("#menu-button-dark").fadeToggle("fast", "linear", 200 );	
	});
	$("#navigation").hide('fast');
	$(".arrow-btn").show('fast');
	$('html, body').animate({
		scrollTop:$("#second-landing").offset().top
	}, 'slow')
});

//hide the dark hamburger, SHOW the light hamburger
$("#about-down-arrow, #contact").click(function() {
	/* Act on the event */
	$("#menu-button-dark").fadeToggle(200,  function() {
		$("#menu-button").fadeToggle("fast", "linear", 200 );	
	});

	//scoll page position to third(last) landing page
	$("#navigation").hide('fast');
	$(".arrow-btn").show('fast');
	$('html, body').animate({
		scrollTop:$("#third-landing").offset().top
	}, 'slow')
});


//return to home on click
$("#home, #about-up-arrow").click(function() {
	//animate menu btn to match background
	$("#menu-button-dark, #navigation").hide();
	$("#menu-button").fadeIn(100);

	//scroll page to home position
	$(".arrow-btn").show('fast');
	$('html, body').animate({
		scrollTop:$("#home-top").offset().top
	}, 'fast');
});


//hide the navigation on return scroll
$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {		
    	//swap menu hamburger button colors
    	$("#menu-button-dark, #navigation").hide(200);
    	$("#menu-button").show();
	}
});

