/* 
	Buyer Framework JS v 0.0.1

	Defines $ as jQuery.
	If you don't need to write jQuery(el).click 
	instead you can write $(el).click because 
	$ is now a variable for jQuery.
*/
jQuery(function($){ 

	/*
		Basic accordion function. Cleans up the code a bit. 
		Instead of repeating the same function over and over
		again this breaks it down into one single use function. 
		Button Markup should look like this. 
		<button aria-expanded="false" aria-controls="targetName"></button> or 
		<a href="#0" aria-expanded="false" aria-controls="targetName"></a>
		Ideally button 
		Accordion content can be any element as long as it has and id that matches aria-controls.
		<ul id="targetName"> or <div id="targetName"></div>
		
	*/


	function accordions(element) {
		$(element).on('click', function(e){
			e.preventDefault();
			let target = '#'+$(this).attr('aria-controls'),
				ariaValue = $(target).attr('aria-expanded'); 
				
			if('false' == ariaValue || ariaValue == null) {
				//added null incase its not there
				ariaValue = 'true';
		 	} else {
				ariaValue = 'false';
		 	}	
			$(target).slideToggle();
			$(this).toggleClass('is-active');
			$(target).attr('aria-expanded', ariaValue);
		});
	}

	accordions('.menu-toggle');
	
		
	$('.search-accordion-button').on('click', function(e){
		e.preventDefault();
		var el = $(this);
		var myTarget = el.attr('href');
		console.log(myTarget);
		if(el.attr('aria-expanded') === 'true') {
			el.attr('aria-expanded', 'false');
		} else {
			el.attr('aria-expanded', 'true');
		}
		$('.search-accordion-button').not(this).attr('aria-expanded', 'false');
		$('.search-content .search-content').not(myTarget).slideUp();
		$(myTarget).slideToggle();
		
	});


	$('.mobile-search-button').on('click', function(e){
		e.preventDefault();
		var el = $(this);
		var myTarget = el.attr('href');
		console.log(myTarget);
		if(el.attr('aria-expanded') === 'true') {
			el.attr('aria-expanded', 'false');
		} else {
			el.attr('aria-expanded', 'true');
		}
		$('.search-accordion-button').not(this).attr('aria-expanded', 'false');
		$('.search-content .search-content').not(myTarget).slideUp();
		$(myTarget).slideToggle();
		
	});
	
	

	$(window).on('resize', function(){
		//reset nav
		$('#nav').attr('aria-expanded', 'false');
		$('#nav').removeAttr('style');
		$('.menu-toggle').attr('aria-expanded', 'false').removeClass('is-active');
	})

	$('.video-facade').on('click', function(e){
		console.log('works?');
		var newContent = $(this).siblings('template')[0].innerHTML;
		console.log(newContent);
		$(this).replaceWith(newContent);
	});

});