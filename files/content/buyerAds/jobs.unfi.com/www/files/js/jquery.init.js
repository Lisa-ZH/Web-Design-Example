jQuery(function($){
	
	$('.menu-toggle').on('click', function(e){
		e.preventDefault();
		var b = $(this).attr('aria-expanded');
		if('false' == b) {
			b = 'true';
		 } else {
			b = 'false';
		 }
		var target = $('.mobile-menu');
		$(target).slideToggle();
		$(this).toggleClass('is-active');
		$(this).attr('aria-expanded', b);
		$('body').toggleClass('menu-open');
	});
	
	


    // ------- Custom UNFI addition in this section --------------------------
	$('.search-accordion-button').on('click', function(e){
		e.preventDefault();
		var el = $(this);
		var myTarget = el.attr('href');
		if(el.attr('aria-expanded') === 'true') {
			el.attr('aria-expanded', false);
		} else {
			el.attr('aria-expanded', true);
		}
		$(myTarget).slideToggle();
		$('.search-accordion-button').not(this).attr('aria-expanded', 'false');
		$('.search-accordion-list').not(myTarget).slideUp();
	});


	$('.accordion-section-title-state').on('click', function(e){
		e.preventDefault();
		var el = $(this);
		var myTarget = el.attr('href');
		if(el.attr('aria-expanded') === 'true') {
			el.attr('aria-expanded', false);
		} else {
			el.attr('aria-expanded', true);
		}
		$(myTarget).slideToggle();
	});
	
	
	$('.accordion-section-title').on('click', function(e){
		e.preventDefault();
		var el = $(this);
		var myTarget = el.attr('href');
		if(el.attr('aria-expanded') === 'true') {
			el.attr('aria-expanded', false);
		} else {
			el.attr('aria-expanded', true);
		}
        
		$('.accordion-section-title').not(this).attr('aria-expanded', 'false');
		$('.accordion-section-content').not(myTarget).slideUp();

		$('.accordion-section-title-state').not(this).attr('aria-expanded', 'false');
		$('.accordion-section-content-state').not(myTarget).slideUp();

        $(myTarget).slideToggle();
	});
    // ----------------------------------------------------------

	
	$('.mobile-search-button').on('click', function(e){
		e.preventDefault();
		var el = $(this);
		var myTarget = el.attr('href');
		if(el.attr('aria-expanded') === 'true') {
			el.attr('aria-expanded', false);
		} else {
			el.attr('aria-expanded', true);
		}
		$(myTarget).slideToggle();
	});
	
	
	var headerHeight = $('#header, #header-2024').height();
	console.log(headerHeight);
	$('.hero-banner').css('margin-top', (headerHeight));
	$('.inner-banner').css('margin-top', (headerHeight));
	$('.mobile-menu').css('height', 'calc(100vh - '+headerHeight+'px)');
	
	$('#main-menu.page-nav a:not(.ex-link)').on('click', function(e){
		e.preventDefault();
		
		
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top - headerHeight
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	});
	
	$('#mobile-menu #home-anchor a:not(.ex-link)').on('click', function(e){
		e.preventDefault();	
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top - headerHeight
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
		
			var target = $('.mobile-menu');
			$(target).slideToggle();
			$('body').removeClass('menu-open');
			$('.menu-toggle').removeClass('is-active');
	});
	
	if(window.location.hash) {
		console.log(window.location.hash);
		$(document).ready(function (event) {
			var yOffset = $(window.location.hash).offset().top - headerHeight;
			$('html, body').scrollTop(yOffset);
		});

	}
	
	
	
	
	
	
	$('.career-path-list').slick({
		centerMode: true,
		centerPadding: '200px',
		slidesToShow: 3,
		infinite: false,
		initialSlide: 1,
		appendArrows: $('.custom-arrows'),
		//variableWidth: true,
		responsive: [
			{
				breakpoint: 1224,
				settings: {
					dots: false,
					centerMode: true,
					slidesToShow: 2,
					initialSlide: 0,
					centerPadding: '10px',
				}
			},
			{
				breakpoint: 860,
				settings: {
					dots: false,
					centerMode: true,
					slidesToShow: 1,
					initialSlide: 0,
					centerPadding: '10px',
				}
			}
		]
	});
	

	

	
	
	$('.image-slider').slick({
		asNavFor: $('.content-slider'),
		slidesToShow: 1,
		arrows: false,
		dots: false,
	
		fade: true,
		autoplay: true,
		autoplaySpeed: 12000,
		// appendDots: $('.custom-buttons'),
		// appendArrows: $('.arrows-wrap'),
		
	});
	
	$('.content-slider').slick({
		slidesToShow: 1,
		asNavFor: $('.image-slider'),
		dots: true,
		
		autoplay: true,
		autoplaySpeed: 12000,
		fade: true,
		
		appendDots: $('.custom-buttons'),
		appendArrows: $('.arrows-wrap'),
		responsive: [
			{
				breakpoint: 860,
				settings: {
					dots: false,
				}
			}
		]
	});
	
	
	$('.standard-slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});
	
	$('.testimonial-slider').on('init', function(event, slick, direction){
		var minHeight = 0;
		$(slick.$slides).each(function(i){
			var myheight = $(this).height();
			
			if(minHeight < myheight) {
				minHeight = myheight;
			}
		});
		$('.testimonial-slider .slick-slide').height(minHeight);
	});
	
	$('.testimonial-slider').slick({
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		infinite: false,
		dots: true,
		initialSlide: 1,
		appendDots: $('.testimonial-dots'),
		appendArrows: $('.testimonial-arrows'),
		adaptiveHeight: false,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
				
					
					slidesToShow: 2,
				}
			}
			,
			{
				breakpoint: 768,
				settings: {
					centerMode: false,
					
					slidesToShow: 1,
					adaptiveHeight: true,
					dots: false
				}
			}
		]
	});
	
	
	$('.slider-pause').on('click', function(e){
		e.preventDefault();
		var target = $(this).data('controls');
		console.log(target);
		//incase speical case with two linked sliders
		if(target === '#image-slider-1') {
			if($(this).hasClass('is-paused')) {
				$('.content-slider').slick('slickPlay');
				$('.image-slider').slick('slickPlay');
				$(this).removeClass('is-paused');
			} else {
				$('.content-slider').slick('slickPause');
				$('.image-slider').slick('slickPause');
				$(this).addClass('is-paused');
				
			}
		} else {	
			if($(this).hasClass('is-paused')) {
				$(target).slick('slickPlay');
				$(this).removeClass('is-paused');
			} else {
				$(target).slick('slickPause');
				$(this).addClass('is-paused');
				
			}
		}
	});
	
});