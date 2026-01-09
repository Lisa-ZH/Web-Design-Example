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
		jQuery('.accordion2 .accordion-section-content2').slideUp(300).removeClass('open');
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
			// Open up the hidden content panel
			jQuery('.accordion2 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion3 .accordion-section-title3').removeClass('active');
		jQuery('.accordion3 .accordion-section-content3').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title3').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion3 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion4 .accordion-section-title4').removeClass('active');
		jQuery('.accordion4 .accordion-section-content4').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title4').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion4 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion5 .accordion-section-title5').removeClass('active');
		jQuery('.accordion5 .accordion-section-content5').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title5').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion5 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion6 .accordion-section-title6').removeClass('active');
		jQuery('.accordion6 .accordion-section-content6').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title6').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion6 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});