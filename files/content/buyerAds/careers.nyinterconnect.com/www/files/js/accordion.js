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
});

jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.col1 #p7DMMt1_1').removeClass('active');
		jQuery('.col1 .p7dmm-sub-wrapper').slideUp(300).removeClass('open');
	}

	jQuery('#p7DMMt1_1').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.col1 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.col2 #p7DMMt1_2').removeClass('active');
		jQuery('.col2 .p7dmm-sub-wrapper').slideUp(300).removeClass('open');
	}

	jQuery('#p7DMMt1_2').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.col2 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section3() {
		jQuery('.col3 #p7DMMt1_3').removeClass('active');
		jQuery('.col3 .p7dmm-sub-wrapper').slideUp(300).removeClass('open');
	}

	jQuery('#p7DMMt1_3').click(function(e) {
		
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(this).is('.active')) {
			close_accordion_section3();
			jQuery(this).removeClass('active');
		}else {
			close_accordion_section3();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.col3 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});