'use strict';
jQuery(function
	($){
	function close_accordion_section(clickElement, menuElement) {
		$(clickElement).removeClass('is-open');
		$(clickElement).attr('aria-expanded', 'false');
		$(menuElement).slideUp(150).removeClass('open');
	}
	
	function open_accordion_section(clickElement, menuElement) {
		$(clickElement).addClass('is-open');
		$(clickElement).attr('aria-expanded', 'true');
		$(menuElement).slideDown(150);
	}
	
	$('.fake-select-wrap button').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('aria-controls');
		if($(this).hasClass('is-open')) {
			close_accordion_section('.fake-select-wrap button', '.search-list');
		} else {
			close_accordion_section('.fake-select-wrap button', '.search-list');
			open_accordion_section(this, target);
		}
	});
	
	$('.mobile-search-button').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('aria-controls');
		if($(this).hasClass('is-open')) {
			close_accordion_section(this, target);
		} else {
			//close_accordion_section('.mobile-search-button', '.search-list');
			open_accordion_section(this, target);
		}
	});
	
	$('.mobile-sub-open').on('click', function(e){
		$(this).siblings('ul').slideToggle();
		$(this).toggleClass('is-open');
	});
	$('.mobile-menu-button').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('is-active');
		$('.bottom-row').slideToggle();
		console.log('test');
	});	
	
	
	$(window).on('resize', function(){
		var windowWidth = $(window).width(),
			breakPoint = '800', 
			mainMenu = 'header .bottom-row', 
			searchMenu = '#search-form';
			if(windowWidth > breakPoint) {
				  $(mainMenu).removeAttr('style');
				  $(searchMenu).removeAttr('style');
			}
	   });
	
	$(".te-field input").focus(function(){
	   //$(this).parent().removeClass("round");
	   $(this).parent().addClass("move-label");
	
	  }).blur(function(){
		  if(!$(this).val()) {
		 	 $(this).parent().removeClass("move-label");
		  }
	   	//$(this).parent().addClass("round");
	  });
	
	$('.accordion-section-title').on('click', function(e){
	   e.preventDefault();
	   var target = $(this).attr('aria-controls');
	   if($(this).hasClass('is-open')) {
		   $(this).html($(this).data('show-text'));
		   close_accordion_section('.accordion-section-title', '.accordion-section-content');
	   } else {
		   $(this).html($(this).data('hide-text'));
		   close_accordion_section('.accordion-section-title', '.accordion-section-content');
		   open_accordion_section(this, target);
	   }
	});

	$('.fixed-warning button').on('click', function(){
		$('.fixed-warning').slideUp();
	});

	$(document).ready(function(){
		setTimeout(function(){
			$('.fixed-warning').slideDown();
		}, 1000)	
	});
	
	const prod = true;
	let jsonurl = 'http://localhost:1997/files/js/data/faq-esl.json';
	if(prod == true) {
		jsonurl = 'https://www.ericksonseniorlivingcareers.com/static/sites/www/files/js/data/faq-esl.json'
	} 
	
	/*
	<div class="faq-row">
		<div class="inner">
			<h2>Section Header</h2>
			<div class="accordions">
				<div class="accordion">
					<div class="accordion-header">
						<h3 id="test-id-header"><button aria-controls="test-id" aria-expanded="false">Accordion Header</button></h3>
					</div>
					<div id="test-id" class="accordion" aria-labelledby="test-id-header">
						<p>Test Content</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	*/
	
	//FAQs
	const faqs = $.getJSON(jsonurl, (json) => {
        console.log('success');
    }).done(function(data){
		let faqHtml = '';
		$.each(data, function(i, faqs){
			$.each(faqs, function(i, faq){
				//Open Row
				faqHtml += `<div class="faq-row">
							<div class="inner">
								<h2>${faq.faqheader}</h2>
								<div class="accordions">`;
				$.each(faq.faqs, function(i, qa){
					let question 	= qa.q,
						anwser 		= qa.a,
						questionID 	= question.toLowerCase().replaceAll(' ', '-').replace('?', '');
						
					faqHtml += 
					`<div class="accordion">
						<div class="accordion-header">
							<h3 id="${questionID}-header"><button aria-controls="${questionID}" aria-expanded="false">${question}</button></h3>
						</div>
						<div id="${questionID}" class="accordion-content" aria-labelledby="${questionID}-header">
							${anwser}
						</div>
					</div>`
				});
				//Close Row	
				faqHtml += `
					</div>
						</div>
							</div>`;
			});
			
			
			$('#faqs').html(faqHtml);
			
		});
	}).fail(function(error){
		console.log('error');
		console.log(error);
	}).always(function(){
		//console.log('completed ajax')
	});
	
	$(document).on('click', '.accordion-header button', function(){
		console.log('clicked');
		let target 		= '#'+$(this).attr('aria-controls'),
			expanded 	= $(this).attr('aria-expanded');	
		$(this).closest('.accordion').toggleClass('is-open');
		if(expanded === 'true') {
			$(this).attr('aria-expanded', 'false')
		} else {
			$(this).attr('aria-expanded', 'true')
		}
		//$(this).attr('aria-expanded', expanded);
		$(target).slideToggle();
	});
});