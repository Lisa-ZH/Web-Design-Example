jQuery(function($){
	
	$('.mobile-toggle').on('click', function(e){
		e.preventDefault();
		var b = $(this).attr('aria-expanded');
		if('false' == b) {
			b = 'true';
		 } else {
			b = 'false';
		 }
		var target = $(this).siblings('nav');
		$(target).slideToggle();
		$(this).toggleClass('is-active');
		$(this).attr('aria-expanded', b);
	});
	
	$(window).on('resize', function(){
		if($(window).width() > 961) {
			$('.bottom-row nav').removeAttr('style');
		}
	});
	
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
	
	$('.has-children > button').on('click', function(e){
		e.preventDefault();
		var el = $(this);
		var myTarget = el.attr('href');
		if(el.attr('aria-expanded') === 'true') {
			el.attr('aria-expanded', false);
		} else {
			el.attr('aria-expanded', true);
		}
		$(myTarget).slideToggle();
		$('.has-children > button').not(this).attr('aria-expanded', 'false');
		$('.sub-menu').not(myTarget).slideUp();
	});
	
	$('.mobile-search-button').on('click', function(e){
		e.preventDefault();
		var b = $(this).attr('aria-expanded');
		if('false' == b) {
			b = 'true';
		 } else {
			b = 'false';
		 }
		var target = $(this).attr('href');
		$(target).slideToggle();
		$(this).toggleClass('is-active');
		$(this).attr('aria-expanded', b);
	});
	
	
	$('.hero-slider').slick({
		appendArrows: $('#hero-arrows'),
		appendDots: $('#hero-dots'),
		dots: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 860,
				settings: {
					adaptiveHeight: true,
				}
			}
		]
	});
	
	$('.testimonial-slider').slick({
		arrows: false,
		appendDots: $('.dots-container'),
		dots: true,
		autoplay: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 860,
				settings: {
					adaptiveHeight: false
				}
			}
		]
	});
	
	
	$(window).on('resize', function(e){
		if($(window).width() <= 800) {
			if(!$('.rewards ul').hasClass('slick-initialized')){
				$('.rewards ul').slick({
					dots: true,
					autoplay: true,
					arrows: false
				});
			}
		} else {
			$('.rewards ul').slick('destroy');
		}
	});
	
	
	$(window).on('load', function(e){
		if($(window).width() <= 800) {
			$('.rewards ul').slick({
				dots: true,
				autoplay: true,
				arrows: false
			});
		} else {
			$('.rewards ul').slick('destroy');
		}
	});
	
	$('#hero-pause').on('click', function(){
		$('.hero-slider').slick('pause');
		$(this).toggleClass('is-paused');
	});
	
	
	$('.play-video').on('click', function(){
		$('video').trigger('pause');
		$(this).siblings('.video-wrap').addClass('play');
		$(this).hide();
		$(this).siblings('.video-wrap').children('video').trigger('play');
	});
	
});