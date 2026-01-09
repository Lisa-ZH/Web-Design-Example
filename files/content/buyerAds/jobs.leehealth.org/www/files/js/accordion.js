jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.search .mobile-search-button').removeClass('active');
		jQuery('.search .mobile-search-button').attr('aria-expanded', 'false');
		jQuery('.search .mobile-search-button').text("Search Jobs Now");
		jQuery('.search .inner').fadeOut(100).removeClass('open');
		jQuery('#LeeHeader').removeClass('nepo');
		jQuery('.blue-background').fadeOut(200).removeClass('open');
	}

	jQuery('.mobile-search-button').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery(this).text("Hide Job Search");
			jQuery('.search ' + currentAttrValue).fadeIn(100).addClass('open');
			jQuery('#LeeHeader').addClass('nepo');
			jQuery('.blue-background').fadeIn(200).removeClass('open');	 
		}

		e.preventDefault();
	});
	
	//Responsive JS Fixes
	function undoSlideToggle() {
		if(jQuery(window).width() >= 1100) {			
			jQuery('.search .inner').removeAttr('style');
			jQuery('.search .mobile-search-button').attr('aria-expanded', false).removeClass('active');
		}
	}
	
	jQuery(window).on('resize', function(){
		undoSlideToggle();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.main-nav .hamburger-link').removeClass('active');
		jQuery('.main-nav .hamburger-link').attr('aria-expanded', 'false');
		//jQuery('#LeeHeader').removeClass('open');
		jQuery('.main-nav #menu-content').slideUp(200).removeClass('open');
	}

	jQuery('.hamburger-link').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('#LeeHeader').addClass('open');
			jQuery('.main-nav ' + currentAttrValue).slideDown(200).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.search .accordion-button').removeClass('active');
		jQuery('.search .accordion-button').attr('aria-expanded', 'false');
		jQuery('.search .accordion-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-button').click(function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('.search ' + currentAttrValue).slideDown(300).addClass('open');	 
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.header-inside .hamburger-title').removeClass('active');
		jQuery('.header-inside .hamburger-title').attr('aria-expanded', 'false');
		jQuery('.header-inside .hamburger-content').slideUp(300).removeClass('open');
	}

	jQuery('.hamburger-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			//close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.header-inside ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
	
	//Responsive JS Fixes
	function undoSlideToggle() {
		if(jQuery(window).width() >= 1100) {			
			jQuery('.header-inside .hamburger-content').removeAttr('style');
			jQuery('.header-inside .hamburger-title').attr('aria-expanded', false).removeClass('active');
		}
	}
	
	jQuery(window).on('resize', function(){
		undoSlideToggle();
	});
	
});
// $('.hamburger-title').on('click', () => {
//     $(this).toggleClass('is-active');
//     $('.navMenu').toggleClass('active');
// });
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.header-inside .hamburger-title-2').removeClass('active');
		jQuery('.header-inside .hamburger-title-2').attr('aria-expanded', 'false');
		jQuery('.header-inside .hamburger-content-2').slideUp(300).removeClass('open');
	}

	jQuery('.hamburger-title-2').click(function (e) {
		// Grab current anchor value
		console.log('test');
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// Open up the hidden content panel
			jQuery('.header-inside ' + currentAttrValue).slideDown(300).addClass('open');
			
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion-section-title').removeClass('is-open');
		jQuery('.accordion-section-title').attr('aria-expanded', 'false');
		jQuery('.accordion-section-content').slideUp(300).removeClass('open');
	}

	 jQuery('.accordion-section-title').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('aria-controls');
		if(jQuery(this).hasClass('is-open')) {
			jQuery(this).html(jQuery(this).data('show-text'));
			close_accordion_section();
		} else {
			jQuery(this).html(jQuery(this).data('hide-text'));
			$('.accordion-section-title').addClass('is-open');
			$('.accordion-section-title').attr('aria-expanded', 'true');
			$('.accordion-section-content').slideDown(150);
		}
	});	
});
