$(document).ready(function(){
	var speed="500";
	// Question handler
	$('li.q').on('click',function(){
		// Get next element
		$(this).next()
			.slideToggle(speed)
				// Select all other answers
				.siblings('li.a')
					.slideUp();
		$(this).siblings('li.q').removeClass('rotate');
		$(this).toggleClass('rotate');
	});
});


