new Splide( '.splide', {
	type: 'loop',
	perPage: 5,
	gap: '50px',
	arrows: false,
	breakpoints: {
		1200: {
			perPage: 4
		},
		960: {
			perPage: 3
		},
		600: {
			perPage: 2,
			gap: '20px'
		}	
	}
} ).mount( window.splide.Extensions );

jQuery(function($){ 
	const year = new Date();
	$('#year').html(year.getFullYear());
	
	
	const dialogBox = document.getElementById('phishing-popup');
	
	$('.open-popup').on('click', function(e){
		dialogBox.showModal();	
	});
	
	/*
		Basic accordion function. Cleans up the code a bit. 
		Instead of repeating the same function over and over
		again this breaks it down into one single use function. 
		Button Markup should look like this. 
		<button aria-expanded="false" aria-controls="targetName"></button> 
		
		Accordion content can be any element as long as it has and id that matches aria-controls.
		<ul id="targetName"> or <div id="targetName"></div>
		
	*/

	function closeOthers() {
		$('.search-accordion-button').attr('aria-expanded', 'false');
		$('.search-accordion-button').removeClass('is-active');
		$('#search-content .search-content').slideUp();
	}
	
	function accordions(element) {
		$(element).on('click', function(e){
			e.preventDefault();
			let ariaValue = $(this).attr('aria-expanded'),
				target = '#'+$(this).attr('aria-controls'); 		
			if('false' == ariaValue || ariaValue == null) {
				//added null incase its not there
				closeOthers();
				ariaValue = 'true';
				
			} else {
				ariaValue = 'false';
			}	
			$(target).slideToggle();
			$(this).toggleClass('is-active');
			$(this).attr('aria-expanded', ariaValue);
		});
	} 

	accordions('.menu-toggle');
	accordions('.mobile-search-button');
	accordions('.search-accordion-button');	
	// accordions(Click Element Name Here);
	
		
	// $('.search-accordion-button').on('click', function(e){
	// 	e.preventDefault();
	// 	var el = $(this);
	// 	var myTarget = el.attr('href');
	// 	if(el.attr('aria-expanded') === 'true') {
	// 		el.attr('aria-expanded', false);
	// 	} else {
	// 		el.attr('aria-expanded', true);
	// 	}
	// 	$(myTarget).slideToggle();
	// 	$('.search-accordion-button').not(this).attr('aria-expanded', 'false');
	// 	$('.search-accordion-list').not(myTarget).slideUp();
	// });
	
	$('.mobile-search-button').append('<div class="search-jobs-icon"><span></span></div>');	


	
	
	$(document).ready(function(){
		document.querySelector('.hero-banner').classList.add('go');
	});	
	
	window.onresize = () => {
		if($(window).width() >= 800) {
			$('#menu-wrapper').removeAttr('style');
			$('.menu-toggle').removeClass('is-active').attr('aria-expanded', 'false');
		}
	}
	$('.advanced-button').text('Clear Filters');
	
	const stateLinks = [{'alabama': 'https://www.addusjobs.com/jobs/us-al/',},{'arizona': 'https://www.addusjobs.com/jobs/us-az'},{'arkansas': 'https://www.addusjobs.com/jobs/us-ar/'},{'california':'https://www.addusjobs.com/jobs/us-ca/'},{'delaware': 'https://www.addusjobs.com/jobs/us-de/'},{'florida':'https://www.addusjobs.com/jobs/us-fl/'},{'georgia': 'https://www.addusjobs.com/jobs/us-ga/'},{'idaho':'https://www.addusjobs.com/jobs/us-id/'},{'illinois': 'https://www.addusjobs.com/jobs/us-il/'},{'michigan':'https://www.addusjobs.com/jobs/us-mi/'},{'missouri': 'https://www.addusjobs.com/jobs/us-mo/'},{'montana':'https://www.addusjobs.com/jobs/us-mt/'},{'new-mexico': 'https://www.addusjobs.com/jobs/us-nm/'},{'north-carolina':'https://www.addusjobs.com/jobs/us-nc/'},{'ohio': 'https://www.addusjobs.com/jobs/us-oh/'},{'oregon' : 'https://www.addusjobs.com/jobs/us-or/'},{'pennsylvania':'https://www.addusjobs.com/jobs/us-pa/'},{'south-carolina':'https://www.addusjobs.com/jobs/us-sc/'},{'tennessee': 'https://www.addusjobs.com/jobs/us-tn/'},{'texas' : 'https://www.addusjobs.com/jobs/us-tx/'},{'virginia' : 'https://www.addusjobs.com/jobs/us-va/'},{'washington' : 'https://www.addusjobs.com/jobs/us-wa/'}];
	let usa = document.getElementById('usa');
	usa.childNodes.forEach(function(child){		
		child.addEventListener('click', function(e){
			let stateID = e.target.getAttribute('id');
			stateLinks.forEach(function(stateLink){
				if(Object.keys(stateLink)[0] === e.target.getAttribute('id')) {
					window.location.href = stateLink[stateID];
				} else {
					//no jobs there
				}
			});
		});
	});
});