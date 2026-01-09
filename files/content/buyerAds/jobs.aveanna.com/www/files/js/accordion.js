jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-title').attr('aria-expanded', 'false');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function (e) {
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
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion2 .accordion-section-title2').removeClass('active');
		jQuery('.accordion2 .accordion-section-title2').attr('aria-expanded', 'false');
		jQuery('.accordion2 .accordion-section-content2').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title2').click(function (e) {
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
			jQuery('.accordion2 ' + currentAttrValue).slideDown(300).addClass('open');
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
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordionmob .accordion-section-titlemob').removeClass('active');
		jQuery('.accordionmob .accordion-section-titlemob').attr('aria-expanded', 'false');
		jQuery('.accordionmob .accordion-section-contentmob').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-titlemob').click(function (e) {
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
			jQuery('.accordionmob ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion4 .accordion-section-title4').removeClass('active');
		jQuery('.accordion4 .accordion-section-title4').attr('aria-expanded', 'false');
		jQuery('.accordion4 .accordion-section-content4').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title4').click(function (e) {
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
			jQuery('.accordion4 ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion5 .accordion-section-title5').removeClass('active');
		jQuery('.accordion5 .accordion-section-title5').attr('aria-expanded', 'false');
		jQuery('.accordion5 .accordion-section-content5').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title5').click(function (e) {
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
			jQuery('.accordion5 ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});


jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title').removeClass('active');
		jQuery('nav .accordion-hamburger-title').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title').click(function (e) {
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
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title-2').removeClass('active');
		jQuery('nav .accordion-hamburger-title-2').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger-2').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title-2').click(function (e) {
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
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title-3').removeClass('active');
		jQuery('nav .accordion-hamburger-title-3').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger-3').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title-3').click(function (e) {
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
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('nav .accordion-hamburger-title-4').removeClass('active');
		jQuery('nav .accordion-hamburger-title-4').attr('aria-expanded', 'false');
		jQuery('nav .accordion-hamburger-4').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-hamburger-title-4').click(function (e) {
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
			jQuery('nav ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion-mobsearch .accordion-section-title-mobsearch').removeClass('active');
		jQuery('.accordion-mobsearch .accordion-section-title-mobsearch').attr('aria-expanded', 'false');
		jQuery('.accordion-mobsearch .accordion-section-content-mobsearch').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title-mobsearch').click(function (e) {
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
			jQuery('.accordion-mobsearch ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('#warning .warning-button').removeClass('active');
		jQuery('#warning .warning-button').attr('aria-expanded', 'false');
		jQuery('#warning .warning-button').text("Expand");
		jQuery('#warning .warning-content').slideUp(300).removeClass('open');
		jQuery('#warning').addClass('collapsed');
	}

	jQuery('.warning-button').click(function (e) {
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
			jQuery(this).text("Close");
			// Open up the hidden content panel
			jQuery('#warning ' + currentAttrValue).slideDown(300).addClass('open');
			jQuery('#warning').removeClass('collapsed');
		}

		e.preventDefault();
	});
});

jQuery(document).ready(function(){
	jQuery('.fraud-button').click(function(e){
		$('#fraud-warning').slideUp();
	});
});