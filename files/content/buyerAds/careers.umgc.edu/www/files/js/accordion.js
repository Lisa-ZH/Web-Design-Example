
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.top-more-link').removeClass('active');
		jQuery('.top-more-link').attr('aria-expanded', 'false');
		jQuery('nav .top-accordion').slideUp(450).removeClass('open');
	}

	jQuery('.top-more-link').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('nav ' + currentAttrValue).slideDown(450).addClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.hamburger-menu-link').removeClass('active');
		jQuery('.hamburger-menu-link').attr('aria-expanded', 'false');
		jQuery('nav .hamburger-menu').slideUp(200).removeClass('open');
		jQuery('.burger').removeClass('tasty');
	}

	jQuery('.hamburger-menu-link').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('.mobile-search-link').removeClass('active');
			jQuery('.mobile-search-link').attr('aria-expanded', 'false');
			jQuery('.mobile-search-link').text("Search Jobs Now");
			jQuery('.back-fade').removeClass('faded');
			jQuery('.search .search-content').slideUp(200).removeClass('open');
			jQuery('nav ' + currentAttrValue).slideDown(400).addClass('open');
			jQuery('.burger').addClass('tasty');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.corp-burger-link').fadeIn(200).removeClass('active');
		jQuery('.corp-burger-link').attr('aria-expanded', 'false');
		jQuery('nav .corp-burger').fadeOut(200).removeClass('open');
		jQuery('.nav-swap').fadeOut(200).addClass('active');
		jQuery('.control-menu').removeClass('umgc');
	}

	jQuery('.corp-burger-link').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).fadeOut(200).addClass('active').attr('aria-expanded', 'true');
			jQuery('nav ' + currentAttrValue).fadeIn(200).addClass('open');
			jQuery('.hamburger-menu-content').fadeOut(200).removeClass('open');
			jQuery('.nav-swap').fadeIn(200).removeClass('active');
			jQuery('.control-menu').addClass('umgc');
			jQuery('nav .title1').removeClass('active');
			jQuery('nav .title2').addClass('active');
			
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.nav-swap').fadeIn(200).removeClass('active');
		jQuery('.nav-swap').attr('aria-expanded', 'false');
		jQuery('nav .hamburger-menu-content').fadeOut(200).removeClass('open');
		jQuery('.corp-burger-link').fadeOut(200).addClass('active');
		jQuery('nav .title2').addClass('active');
	}

	jQuery('.nav-swap').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).fadeOut(200).addClass('active').attr('aria-expanded', 'true');
			jQuery('nav ' + currentAttrValue).fadeIn(200).addClass('open');
			jQuery('nav .corp-burger').fadeOut(200).removeClass('open');
			jQuery('.corp-burger-link').fadeIn(200).removeClass('active');
			jQuery('nav .title2').removeClass('active');
			jQuery('nav .title1').addClass('active');
			jQuery('.control-menu').removeClass('umgc');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.corp-burger-link2').removeClass('active');
		jQuery('.corp-burger-link2').attr('aria-expanded', 'false');
		jQuery('nav .corp-burger2').slideUp(200).removeClass('open');
	}

	jQuery('.corp-burger-link2').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.hamburger-menu-link2').removeClass('active');
		jQuery('.hamburger-menu-link2').attr('aria-expanded', 'false');
		jQuery('nav .hamburger-menu-content2').slideUp(200).removeClass('open');
	}

	jQuery('.hamburger-menu-link2').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.search-field .accordion-title').removeClass('active');
		jQuery('.search-field .accordion-title').attr('aria-expanded', 'false');
		jQuery('.search-field .accordion-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-title').click(function (e) {
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
		jQuery('.vants').removeClass('expanded');
		jQuery('.vant-expander').removeClass('active');
		jQuery('.vant-expander').attr('aria-expanded', 'false');
		jQuery('.vant-expander').text("Show More");
		jQuery('.vants .expanding-vant-content').slideUp(450).removeClass('open');
	}

	jQuery('.vant-expander').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery(this).text("Show Less");
			jQuery('.vants').addClass('expanded');
			jQuery('.vants ' + currentAttrValue).slideDown(450).addClass('open');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.mobile-search-link').removeClass('active');
		jQuery('.mobile-search-link').attr('aria-expanded', 'false');
		jQuery('.mobile-search-link').text("Search Jobs Now");
		jQuery('.back-fade').removeClass('faded');
		jQuery('.search .search-content').slideUp(200).removeClass('open');
	}

	jQuery('.mobile-search-link').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery(this).text("Hide Job Search");
			jQuery('.additional-search-link').text("View All Jobs");
			jQuery('.back-fade').addClass('faded');
			jQuery('.hamburger-menu-link').removeClass('active');
			jQuery('.hamburger-menu-link').attr('aria-expanded', 'false');
			jQuery('nav .hamburger-menu').fadeOut(500).removeClass('open');
			jQuery('.burger').removeClass('tasty');
			jQuery('.search ' + currentAttrValue).slideDown(200).addClass('open');
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

jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.faq-title').removeClass('active');
		jQuery('.faq-title').attr('aria-expanded', 'false');
		jQuery('.faq-content').slideUp(350).removeClass('open');
	}

	jQuery('.faq-title').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			jQuery(this).addClass('active');
			jQuery(this).attr('aria-expanded', 'true');
			jQuery('.faq-container ' + currentAttrValue).slideDown(350).addClass('open');
		}

		e.preventDefault();
	});
});