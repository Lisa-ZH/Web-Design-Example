jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion2 .accordion-section-title2').removeClass('active');
		jQuery('.accordion2 .accordion-section-title2').attr('aria-expanded', 'false');
		jQuery('.accordion2 .accordion-section-content2').slideUp(300).removeClass('open');
		jQuery('header').removeClass('resize-me');
	}

	jQuery('.accordion-section-title2').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			// resize the logo on activation
			jQuery('header').addClass('resize-me');
			// Open up the hidden content panel
			jQuery('.accordion2 ' + currentAttrValue).slideDown(0).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.mobile-search .mobile-search-title').removeClass('active');
		jQuery('.mobile-search .mobile-search-title').attr('aria-expanded', 'false');
		jQuery('.mobile-search .mobile-search-content').slideUp(300).removeClass('open');
	}

	jQuery('.mobile-search-title').click(function (e) {
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
			jQuery('.mobile-search ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion3 .accordion-section-title3').removeClass('active');
		jQuery('.accordion3 .accordion-section-title3').attr('aria-expanded', 'false');
		jQuery('.accordion3 .accordion-section-content3').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title3').click(function (e) {
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
			jQuery('.accordion3 ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});