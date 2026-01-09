jQuery(function($) {
    //Responsive JS Fixes
    function undoSlideToggle() {
        if ($(window).width() >= 960) {
            $('#main-menu').removeAttr('style');
            $('.menu-toggle').attr('aria-expanded', false).removeClass('is-active');
        }
    }

    function close_accordion_section(clickElement, menuElement) {
        $(clickElement).removeClass('active');
        $(clickElement).attr('aria-expanded', 'false');
        $(menuElement).slideUp(150).removeClass('open');
    }

    $(window).on('resize', function() {
        undoSlideToggle();
    });

    $('.menu-toggle').on('click', function(e) {
        e.preventDefault();
        var b = $(this).attr('aria-expanded');
        if ('false' == b) {
            b = 'true';
        } else {
            b = 'false';
        }
        var target = '#main-menu';
        $(target).slideToggle();
        $(this).toggleClass('is-active');
        $(this).attr('aria-expanded', b);
    });

    async function getStateFromSheet() {
        const response = await fetch('/static/sites/www/files/js/states.json?08042025');
        const data = await response.json();
        return data;
    }

    async function makeListMakeMap() {
        var states = await getStateFromSheet(),
            stateList = document.getElementById('state-ul'),
            mobileStateList = document.getElementById('mobile-state-dropdown'),
            mobileStateBoxes = document.getElementById('mobile-state-boxes'),
            freeStates = ['federated-states-of-micronesia', 'palau', 'marshall-islands'];
        Array.prototype.forEach.call(states, function(state) {
            var stateName = state['state'],
                stateId = state['state-id'],
                localLink = state['local-link'],
                stateLink = state['state-link'],
                altTitle = 'Territorial',
                listItemContent = '',
                mobilelistItemContent = '',
                mobileStateContent = '';
                mobilelistItemContent += `<li><button class="mobile-box-opener" aria-controls="${stateId}-mobile-list-item">${stateName}</button></li>`;
                
            if (localLink) {
                listItemContent += `<li id="${stateId}-link">
                    <button class="" id="${stateId}-header" aria-expanded="true" aria-controls="${stateId}-department-list">${stateName}</button>
                    <ul id="${stateId}-department-list" class="health-department-accordion" aria-labelledby="${stateId}-header">
                        <li><a href="${localLink}">Local Health Department</a></li>
                        <li><a href="${stateLink}">State Health Department</a></li>
                    </ul>
                </li>`;
                mobileStateContent += `<div id="${stateId}-mobile-list-item" class="mobile-state-box">
                <h3><small>${stateName}</small> Connect with Local, State,<br> and Territorial Health Departments</h3>
                <ul>
                    <li><a target="_blank" href="${localLink}">Local Health Departments<span class="sr-only"> for ${stateName}<span></a></li>
                    <li><a target="_blank" href="${stateLink}">State Health Department<span class="sr-only"> for ${stateName}<span></a></li>
                </ul>
                </div>`;
            } else {
                if(true === freeStates.includes(stateId)) {
                    altTitle = 'Freely Associated State';
                }
                listItemContent += '<li class="link-out" id="'+stateId+'-link"><a href="' + stateLink + '" taget="_blank">' + stateName + '</a></li>';
                mobileStateContent += `<div id="${stateId}-mobile-list-item" class="mobile-state-box">
                <h3><small>${stateName}</small> Connect with ${altTitle} Health Departments</h3>
                <ul>
                    <li><a target="_blank" href="${stateLink}">${altTitle} Health Department<span class="sr-only"> for ${stateName}<span></a></li>
                </ul>
                </div>`;
            }
            stateList.innerHTML += listItemContent;
            mobileStateList.innerHTML += mobilelistItemContent;
            mobileStateBoxes.innerHTML += mobileStateContent;
        });

        var elements = document.querySelectorAll('.state');
        Array.prototype.forEach.call(elements, function(el) {
            el.addEventListener('mouseover', function(e) {
                e.preventDefault();
                $('.tooltip').remove();
                var tooltipWrap = document.createElement("div"); //creates div
                tooltipWrap.className = 'tooltip'; //adds class
                var title = el.id;
                var altTitle = 'Territorial';
                var content = '';
                Array.prototype.forEach.call(states, function(state) {
                    if (title == state['state-id']) {
                        var stateName = state['state'],
                            stateId = state['state-id'],
                            localLink = state['local-link'],
                            stateLink = state['state-link'];
                        if (localLink) {
                            content = `<h3><small>${stateName}</small> Connect with Local, State,<br> and Territorial Health Departments</h3>
                            <ul>
                                <li><a target="_blank" href="${localLink}">Local Health Departments<span class="sr-only"> for ${stateName}<span></a></li>
                                <li><a target="_blank" href="${stateLink}">State Health Department<span class="sr-only"> for ${stateName}<span></a></li>
                            </ul><button class="close-popup" aria-label="close popup"></button>`;
                        } else {
                            if(true === freeStates.includes(stateId)) {
                                altTitle = 'Freely Associated State';
                            }
                            content = `<h3><small>${stateName}</small> Connect with ${altTitle} Health Departments</h3>
                                <ul>
                                    <li><a target="_blank" href="${stateLink}">${altTitle} Health Department<span class="sr-only"> for ${stateName}<span></a></li>
                                </ul><button class="close-popup" aria-label="close popup"></button>`;
                        }
                    }
                });
                tooltipWrap.innerHTML = content; //add the text node to the newly created div.
                document.getElementById('country-wrap').before(tooltipWrap);
                var linkProps = this.getBoundingClientRect();
                var tooltipProps = tooltipWrap.getBoundingClientRect();
                const xCenter = (linkProps.left + linkProps.width / 2)  -  ((tooltipProps.width / 2));
                const yCenter = (linkProps.top + linkProps.height / 2) -  (tooltipProps.height + 20);
                tooltipWrap.setAttribute('style', 'top:' + yCenter + 'px;' + 'left:' + xCenter + 'px; ');
            }, false);
            
        });
    }
    if($('.connect-with-states').length) {
        makeListMakeMap();
    }
    $(document).on('click', '.close-popup', function(e) {
		e.preventDefault();
        $('.tooltip').remove();
    });
    $(window).on('scroll', function(){
        $('.tooltip').remove();
    });
    
    
        
    $('.search-accordion-button').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        if ($(this).hasClass('active')) {
            close_accordion_section('.search-accordion-button', '.search-accordion-list');
        } else {
            close_accordion_section('.search-accordion-button', '.search-accordion-list');
            $(this).attr('aria-expanded', true).addClass('active');
            $(href).addClass('active').slideToggle();
        }
    });

    $(".search-headings").insertAfter('.search-public-health-home h2');

    $(document).on('click', '.accordion-header a, .accordion-header button', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        if(!href) {
            href = '#'+$(this).attr('aria-controls');
        }
        if ($(this).hasClass('active')) {
            close_accordion_section('.accordion-header a, .accordion-header button', '.accordion-content');
        } else {
            close_accordion_section('.accordion-header a, .accordion-header button', '.accordion-content');
            $(this).attr('aria-expanded', true).addClass('active');
            $(href).addClass('active').slideToggle();
        }
    });

    $(document).on('click', '#state-ul button', function(e) {
        e.preventDefault();
        var href = '#'+$(this).attr('aria-controls');

        if ($(this).hasClass('active')) {
            close_accordion_section('#state-ul button', '.health-department-accordion');
        } else {
            close_accordion_section('#state-ul button', '.health-department-accordion');
            $(this).attr('aria-expanded', true).addClass('active');
            $(href).addClass('active').slideToggle();
        }
    });    

    $('.accordion-section-title').each(function() {
        var controls = $(this).attr('aria-controls');
        var expanded = $(this).attr('aria-expanded');
        var title = $(this).html();
        $(this).after('<button class="open-accordion" aria-controls="' + controls + '" aria-expanded="' + expanded + '"><span class="sr-only">Open Sub for ' + title + '</span></button>');
    });

    $(document).on('click', '.open-accordion', function(e) {
        e.preventDefault();
        var bool = $(this).attr('aria-expanded');
        bool = !bool;
        $(this).attr('aria-expanded', bool);
        $(this).toggleClass('is-active');
        $(this).siblings('.accordion-section-content').slideToggle();
    });

    $(document).on('click', '.mobile-state-dropdown-button', function(e) {
        e.preventDefault();
        var bool = $(this).attr('aria-expanded');
        bool = !bool;
        $(this).attr('aria-expanded', bool);
        $(this).toggleClass('is-active');
        $(this).siblings('#mobile-state-dropdown').slideToggle();
    });

    $(document).on('click', '.mobile-box-opener', function(e) {
        e.preventDefault();
        var target = '#'+$(this).attr('aria-controls');
        var bool = $(this).attr('aria-expanded');
        bool = !bool;
        $(this).attr('aria-expanded', bool);
        $(this).toggleClass('is-active');
        $('.mobile-state-dropdown-button').toggleClass('is-active');
        $('#mobile-state-dropdown').slideToggle();
        $('.mobile-state-box').not('target').removeClass('is-open')
        $(target).addClass('is-open');
    });

    $('#event-callout .event-accordion-top a').on('click', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(href).slideToggle();
        $(this).toggleClass('active');
    });

    $('#event-callout .event-accordion-top a').mouseenter(function() {
        $('#event-callout').addClass('active');
    }).mouseleave(function() {
        $('#event-callout').removeClass('active');
    });

    $('#main-menu button').on('click', function(e) {
        e.preventDefault();
        $(this).siblings('ul').toggle();
    });

    var thisYear = new Date().getFullYear();
    $('#year').html(thisYear);

    $('.tab-nav a').on('click', function(e) {
        e.preventDefault();
        var myTarget = $(this).attr('href');
        if ($(this).hasClass('active')) {
            //do nothing
        } else {
            $('.img-wrap div').not(myTarget).hide();
            $(myTarget).show();
            $('.tab-nav a').removeClass('is-active');
            $(this).addClass('is-active');
        }
    });
    
    $('.tab-template-nav button').on('click', function(e){
		e.preventDefault();
        let targetContent = $('#'+$(this).attr('aria-controls'))[0].innerHTML;
        const contentContainer = $('#tab-container');
		console.log(contentContainer);
		contentContainer[0].innerHTML = '';
		$(targetContent).clone().appendTo(contentContainer);
		if($(this).hasClass('is-active')) {
			
		} else {
			$('.tab-template-nav button').removeClass('is-active');
			$(this).addClass('is-active');
		}
    });
});