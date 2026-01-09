/* See Full Listing */
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.expanded-trigger').removeClass('active');
		jQuery('.expanded-trigger').attr('aria-expanded', 'false');
		jQuery('.expanded-trigger').text("See More"); //See Full Listing
		jQuery('.expanded-inner').removeClass('full');
	}

	jQuery('.expanded-trigger').click(function (e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if (jQuery(e.target).is('.active')) {
			console.log("less");
			close_accordion_section();
		} else {
			console.log("more");
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Add aria-expanded indicator
			jQuery(this).attr('aria-expanded', 'true');
			jQuery(this).text("See Less"); //Hide Full Listing
			// Open up the hidden content panel
			jQuery('.expanded ' + currentAttrValue).addClass('full');
		}

		e.preventDefault();
	});
});

/* Contact Us Today! */
jQuery(document).ready(function () {
	function close_accordion_section() {
		jQuery('.contact-us-pop .pop-trigger').removeClass('active');
		jQuery('.contact-us-pop .pop-trigger').attr('aria-expanded', 'false');
		jQuery('.contact-us-pop .pop-trigger').text("Contact Us Today!");
		jQuery('.pop-content').slideUp(300).removeClass('open');
		jQuery('.contact-us-pop').removeClass('pop-open');
	}

	jQuery('.pop-trigger').click(function (e) {
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
			jQuery(this).text("Close Contact Info");
			// Open up the hidden content panel
			jQuery('.contact-us-pop ' + currentAttrValue).slideDown(300).addClass('open');
			jQuery('.contact-us-pop').addClass('pop-open');
		}

		e.preventDefault();
	});
});