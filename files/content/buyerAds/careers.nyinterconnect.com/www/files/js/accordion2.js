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
	function close_accordion_section() {
		jQuery('.col3 #p7DMMt1_3').removeClass('active');
		jQuery('.col3 .p7dmm-sub-wrapper').slideUp(300).removeClass('open');
	}

	jQuery('#p7DMMt1_3').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.col3 ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.content-row4-inside #showHidecontenttitle').removeClass('active');
		jQuery('.content-row4-inside .showHidecontent').slideUp(300).removeClass('open');
	}

	jQuery('#p7DMMt1_3').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.content-row4-inside ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});