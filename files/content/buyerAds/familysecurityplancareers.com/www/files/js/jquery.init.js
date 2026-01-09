jQuery(function($){
	
	$('.menu-toggle').on('click', function(e){
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
	
	
	$('.hero-slider').slick({
		dots: true,
		arrows: true,
		appendArrows: '#arrows',
		appendDots: '#dots',
		responsive: [
			{
				breakpoint: 960,
				settings: {
					arrows: false,
					dots: true
			  }
			}
		]
	});
});