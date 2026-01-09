jQuery(function($){
		$('.inner-slider-mod').slick({
			infinite: true,
			arrows: true,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});		
		$('.hero-banner-slider').slick({
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 700,
					settings: {
						arrows: false,
						dots: true
					}
				}
			]
		});
		$('.testimonial-slider').slick({
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			adaptiveHeight: true,
		});
	
	
	$('.search-accordion-button').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');console.log(href);
		$(href).slideToggle();
		$(this).toggleClass('active');
	});
	
	$(document).on('click', '.accordion-section-title', function(e){
		e.stop();
		e.preventDefault();
		$(this).toggleClass('active');
		var href = $(this).attr('href');console.log(href);
		$(href).slideToggle();
	});
	
	$('.accordion-header').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).slideToggle();
		$(this).toggleClass('is-active');
	})
	
	
	
	$('#play-vimeo-video').on('click', function(e){
		e.preventDefault();
		var vimeoID = $(this).data('vimeo-id');
		$(this).replaceWith( "<div class='embed-container'><iframe src='https://player.vimeo.com/video/"+vimeoID+"?autoplay=1' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>" );
	});
	
	
	// (function() {
	// 	let videoWrap = document.getElementById('video-wrap-14'),
	// 		videoStill = document.getElementById('video-still-14'),
	// 		videoCtl = document.getElementById('video-ctl-14');
	// 	videoStill.addEventListener('click', function() {
	// 		videoCtl
	// 		videoWrap.style.display = 'block';
	// 		videoStill.style.display = 'none';
	// 		videoCtl.play();
	// 	});
	// })();
	

	
});