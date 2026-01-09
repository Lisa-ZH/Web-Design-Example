jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion-hamburger .accordion-section-title-hamburger').removeClass('active');
		jQuery('.accordion-hamburger .accordion-section-title-hamburger').attr('aria-expanded', 'false');
		jQuery('.accordion-hamburger .accordion-section-content-hamburger').fadeOut(350).removeClass('open');
		jQuery('.mobile-search').removeClass('open-menu');
	}

	jQuery('.accordion-section-title-hamburger').click(function (e) {
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
			// eliminate dropshadow from mobile search when menu is open
			jQuery('.mobile-search').addClass('open-menu');
			// Open up the hidden content panel
			jQuery('.accordion-hamburger ' + currentAttrValue).fadeIn(200).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion-hamburger2 .accordion-section-title-hamburger2').removeClass('active');
		jQuery('.accordion-hamburger2 .accordion-section-title-hamburger2').attr('aria-expanded', 'false');
		jQuery('.accordion-hamburger2 .accordion-section-content-hamburger2').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title-hamburger2').click(function (e) {
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
			jQuery('.accordion-hamburger2 ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.mobile-search .mobile-search-title').removeClass('active');
		jQuery('.mobile-search .mobile-search-title').attr('aria-expanded', 'false');
		jQuery('.mobile-search .mobile-search-title').text("Search Jobs Now");
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
			// Change search copy
			jQuery(this).text("Hide Job Search");
			// Open up the hidden content panel
			jQuery('.mobile-search ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.search-field .accordion-section-title3').removeClass('active');
		jQuery('.search-field .accordion-section-title3').attr('aria-expanded', 'false');
		jQuery('.search-field .accordion-section-content3').slideUp(300).removeClass('open');
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
			jQuery('.search-field ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});


jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion-button').removeClass('active');
		jQuery('.accordion-button').attr('aria-expanded', 'false');
		jQuery('.accordion-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-button').click(function (e) {
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
			jQuery( currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});