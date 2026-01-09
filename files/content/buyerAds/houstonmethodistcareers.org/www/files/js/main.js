jQuery(function($){
	
	function close_accordion_section(clickElement, menuElement) {
		$(clickElement).removeClass('active');
		$(clickElement).attr('aria-expanded', 'false');
		$(menuElement).hide().removeClass('open');
	}
	const today = new Date();
	const year = today.getFullYear();

	$('#this-year').html(year);
	
	$('.job-description table').each(function(i){
		console.log('yup');
		$(this).removeAttr('style');
		$(this).removeAttr('width');
		$(this).find('td').each(function(i){
			$(this).removeAttr('style');
			$(this).removeAttr('width');
		});
		$(this).wrap("<div class='mobile-wrap-overflow'></div>");
		$(this).wrap("<div class='mobile-wrap'></div>");
	});
	
	$('.hero-banner').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	
	$('.interior-banner-slide-show').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	
	$('.menu-toggle').on('click', function(e){
		var menu = $(this).attr('aria-controls');
		var boo = $('#'+menu).attr('aria-expanded') == 'false' ? 'true' : 'false';
		$('#'+menu).attr('aria-expanded', boo);
		$('#'+menu).slideToggle();
		$(this).toggleClass('is-active');
		
	});
	
	$('.open-sub').on('click', function(e){
		var menu = $(this).attr('aria-controls');
		var boo = $(menu).attr('aria-expanded') == 'false' ? 'true' : 'false';
		$('#'+menu).attr('aria-expanded', boo);
		$('#'+menu).toggle();
		$(this).toggleClass('is-active');
		
	});
	
	$('.middle-bar nav > ul > li > a').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var href = $(this).attr('href');	
		if ($(e.target).is('.active')) {
			close_accordion_section('.middle-bar nav > ul > li > a', '.mega-menu');
		} else {
			close_accordion_section('.middle-bar nav > ul > li > a', '.mega-menu');

			$(this).addClass('active');
			$(this).attr('aria-expanded', 'true');
			$(href).show().addClass('open');
		}
	});
	
	$('.bottom-row nav > ul > li > .open-sub').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var href = $(this).attr('href');	
		console.log(href);
		if ($(e.target).is('.active')) {
			close_accordion_section('.bottom-row nav > ul > li > .open-sub', '.mega-menu');
		} else {
			close_accordion_section('.bottom-row nav > ul > li > .open-sub', '.mega-menu');
	
			$(this).addClass('active');
			$(this).attr('aria-expanded', 'true');
			$(href).show().addClass('open');
		}
	});
	
	$("body").click(function(){
		close_accordion_section('.bottom-row nav > ul > li > .open-sub', '.mega-menu');
	});
	
	$('.mega-menu button.close').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		close_accordion_section('.bottom-row nav > ul > li > .open-sub', '.mega-menu');
	});
	
	
	$('.accordion-section-title6').on('click', function(e){
		e.preventDefault();
		
		var href = $(this).attr('href');	
		if ($(e.target).is('.active')) {
			$(this).removeClass('active');
			$(this).attr('aria-expanded', 'false');
			$(href).slideUp(300).removeClass('open');
		} else {
		
			$(this).addClass('active');
			$(this).attr('aria-expanded', 'true');
			$(href).slideDown(300).addClass('open');
		}
	});
	
	$('.sub-sub-menu > a').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');	
		if ($(e.target).is('.active')) {
			close_accordion_section('.sub-sub-menu > a', '.level_3');
		} else {
			close_accordion_section('.sub-sub-menu > a', '.level_3');
		
			$(this).addClass('active');
			$(this).attr('aria-expanded', 'true');
			$(href).slideDown(300).addClass('open');
		}
	});
	
	
	// $('.accordion-section-title3').on('click', function(e){
	// 	e.preventDefault();
	// 	var href = $(this).attr('href');	
	// 	if ($(e.target).is('.active')) {
	// 		close_accordion_section('.accordion-section-title3', '.accordion-section-content3');
	// 	} else {
	// 		close_accordion_section('.accordion-section-title3', '.accordion-section-content3');
	// 	
	// 		$(this).addClass('active');
	// 		$(this).attr('aria-expanded', 'true');
	// 		$(href).slideDown(300).addClass('open');
	// 	}
	// });
	// 
	// 
	$('.search-accordion-button').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('aria-controls');	
		if ($(e.target).is('.active')) {
			close_accordion_section('.search-accordion-button', '.search-accordion-list');
		} else {
			close_accordion_section('.search-accordion-button', '.search-accordion-list');
		
			$(this).addClass('active');
			$(this).attr('aria-expanded', 'true');
			$(href).slideDown(300).addClass('open');
		}
	});
	
	
	$('.accordion-section-title').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');	
		console.log(e.target);
		if ($(e.target).is('.active')) {
			
			close_accordion_section('.accordion-section-title', '.accordion-section-content');
		} else {
			close_accordion_section('.accordion-section-title', '.accordion-section-content');
			$(this).addClass('active');
			$(this).attr('aria-expanded', 'true');
			$(href).slideDown(300).addClass('open');
		}
		
	});
	
	
	// $('a').each(function(){
	// 	$(this).attr('tabindex', '0');
	// });
	// 
	$('.mobile-search-button').on('click', function(e) {
		e.preventDefault();
		var href = $(this).attr('aria-controls');
		if ($(e.target).is('.active')) {
			close_accordion_section('.mobile-search-button', '#search-form');
		} else {
			close_accordion_section('.mobile-search-button', '#search-form');
		
			$(this).addClass('active');
			$(this).attr('aria-expanded', 'true');
			$(href).slideDown(300).addClass('open');
		}
	});
	
	$('.student-grad-nav ul li a').each(function(e){
		var href = $(this).attr('href');
		var location = window.location.pathname;
			location = location.replace('/','');
		console.log(location);
		if(href === location) {
			$(this).addClass('is-active');
		}
		
	});
	
	if($('.eeo-statement')) {
		$('.eeo-statement').remove();
	}
	function setCookie(cname, cvalue, exdays) {
	  const d = new Date();
	  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	  let expires = "expires="+d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	function getCookie(cname) {
	  let name = cname + "=";
	  let ca = document.cookie.split(';');
	  for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
		  c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
		  return c.substring(name.length, c.length);
		}
	  }
	  return "";
	}
	
	// const maintenanceLetter = `<div class="maintenance">
	// 	<div class="wrap">
	// 		<p><strong>System Maintenance in Progress</strong></p>
	// 		<p>To better serve our applicants, Houston Methodist is upgrading to the Workday applicant tracking system. Beginning December 15, new job listings and the full application process will be temporarily unavailable. During this time, you may explore jobs and submit your interest, then return in January to complete a formal application. Thank you for your patience and continued interest in leading medicine.</p>
	// 	</div>
	// 	<button id="close-maintenance" aria-label="close maintenance message"><span>×</span></button>
	// </div>`;
	// if(getCookie('maintenance') != 'Closed') {
	// 	$('header').prepend(maintenanceLetter);	
	// }
	// 
	// 
	// 
	// $(document).on('click', '#close-maintenance', function(){
	// 	$('.maintenance').slideUp(function(){
	// 	$(this).remove();
	// 		document.cookie = "maintenance=Closed";
	// 	});
	// });
	
});