$(document).ready(function () {

	function close_accordion_section() {
		$('.expanded-trigger').removeClass('active');
		$('.expanded-trigger').attr('aria-expanded', 'false');
		$('.thumb-info-description').removeClass('full');
	}

	$('.expanded-trigger').click(function (e) {
		e.preventDefault();
	// Grab current anchor value
		var currentAttrValue = $(this).attr('href');
		var svg_text_up= "<span><svg height=\"24\" width=\"24\" viewBox=\"0 -5 24 24\" class=\"svg-icon\"><path d=\"M16.116 14.53L12 10.414 7.884 14.53a.25.25 0 01-.354 0l-1.06-1.06a.25.25 0 010-.354l5.353-5.353a.25.25 0 01.354 0l5.353 5.353a.25.25 0 010 .354l-1.06 1.06a.25.25 0 01-.354 0\"></path></svg></span>";
		var svg_text_down= "<span><svg height=\"24\" width=\"24\" viewBox=\"0 5 24 24\" class=\"svg-icon\"><path d=\"M16.116 14.53L12 10.414 7.884 14.53a.25.25 0 01-.354 0l-1.06-1.06a.25.25 0 010-.354l5.353-5.353a.25.25 0 01.354 0l5.353 5.353a.25.25 0 010 .354l-1.06 1.06a.25.25 0 01-.354 0\"></path></svg></span>";
		
		if ($(e.target).is('.active')) {
		close_accordion_section();
		$(this).html("Continue reading" + svg_text_down);
		$(currentAttrValue + '+.bottom-expander a span .svg-icon').removeClass('up-arrow').addClass('down-arrow');
		} else {
			close_accordion_section();
			// Add active class to section title
			$(this).addClass('active');
			// Add aria-expanded indicator
			$(this).attr('aria-expanded', 'true');
			$(this).html("Show less" + svg_text_up);
			$(currentAttrValue + '+.bottom-expander a span .svg-icon').removeClass('down-arrow').addClass('up-arrow');
			// Open up the hidden content panel
			$('.thumb-info ' + currentAttrValue).addClass('full');
		}
	});
});

/*
<span><svg height=\"24\" width=\"24\" viewBox=\"0 5 24 24\" class=\"svg-icon\">
  <path d=\"M16.116 14.53L12 10.414 7.884 14.53a.25.25 0 01-.354 0l-1.06-1.06a.25.25 0 010-.354l5.353-5.353a.25.25 0 01.354 0l5.353 5.353a.25.25 0 010 .354l-1.06 1.06a.25.25 0 01-.354 0\"></path>
</svg></span>
*/
