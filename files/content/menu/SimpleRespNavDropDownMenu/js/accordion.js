jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.accordion3 .accordion-section-title3').removeClass('active');
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
			// Open up the hidden content panel
			jQuery('.accordion3 ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});
});
