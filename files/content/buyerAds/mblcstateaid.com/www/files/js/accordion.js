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
			close_accordion_section();

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
		jQuery('.search-content .search-accordion-button').removeClass('active');
		jQuery('.search-content .search-accordion-button').attr('aria-expanded', 'false');
		jQuery('.search-content .search-content2').slideUp(200).removeClass('open');
	}

	jQuery('.search-accordion-button').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('.search-content ' + currentAttrValue).slideDown(350).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.mobile-search-button').removeClass('active');
		jQuery('.mobile-search-button').attr('aria-expanded', 'false');
		jQuery('.mobile-search-button').text("Search Jobs Now");
		jQuery('.search-content').slideUp(200).removeClass('open');
		jQuery('.menu-background').removeClass('live');
	}

	jQuery('.mobile-search-button').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery(this).text("Hide Job Search");
			jQuery('.accordion-hamburger-title').removeClass('active');
			jQuery('.accordion-hamburger-title').attr('aria-expanded', 'false');
			jQuery('nav .accordion-hamburger').fadeOut(150).removeClass('open');
			jQuery('.burger').removeClass('tasty');
			jQuery('.menu-background').addClass('live');
			jQuery(currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.search-accordion-title').removeClass('active');
		jQuery('.search-accordion-title').attr('aria-expanded', 'false');
		jQuery('.search-accordion-content').slideUp(450).removeClass('open');
	}

	jQuery('.search-accordion-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('.search ' + currentAttrValue).slideDown(450).addClass('open');
		}

		e.preventDefault();
	});
});
