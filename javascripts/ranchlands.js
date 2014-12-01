$(document).ready(function(){

	/* Move the Header */

	$(function(){
	 var shrinkHeader = 100;
	  $(window).scroll(function() {
	    var scroll = getCurrentScroll();
	      if ( scroll >= shrinkHeader ) {
	           $('.header').addClass('shrink');
	        }
	        else {
	            $('.header').removeClass('shrink');
	        }
	  });
	function getCurrentScroll() {
	    return window.pageYOffset || document.documentElement.scrollTop;
	    }
	});

	/* Magnific PopUp Videos for Flyovers */

    $('.popUpVideo').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

	/* The Amenities Nav Tabs */

    $('ul.amenitiesTabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.amenitiesTabs li').removeClass('current');
		$('.amenitiesTabContent').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
		$('.amenitiesTabContent.current > ul.amenitiesTabs').fadeIn('1000');
	});

    /* The Map Tabs*/

    $('ul.mapsTabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.mapsTabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
		$('.tab-content.current > ul.mapLists').fadeIn('1000');
	});

	/* The Vision Nav Tabs */

    $('ul.visionTabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.visionTabs li').removeClass('current');
		$('.visionTabContent').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
		$('.visionTabContent.current > ul.visionTabs').fadeIn('1000');
	});
	
});