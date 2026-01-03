$(document).ready(function(){
	var speed = 500;
	var autoswitch = false; //false
	var autoswitch_speed = 3000;

	$('.background-image').first().addClass('active');

	$('.background-image').hide();

	$('.active').show();

	$('.prev').on('click', prevSlide);

	$('.next').on('click', nextSlide);

	$('.stop').on('click', playStopSlide);

	$('.play').on('click', playStopSlide);

	$('.btn').on('click', currentSlide);

	if (autoswitch == true) {
		setInterval(nextSlide,autoswitch_speed);
	}

	function playStopSlide(){
		/*
		if('.data-action').attr('stop') {
			clearInterval();
			$('.stop').removeClass('stop').addClass('play');
		$('.play').html("<img src=" + "'files/images/white-play.png'"+ ">");
		}
		else {
			setInterval(nextSlide,autoswitch_speed);
			$('.play').removeClass('play').addClass('stop');
		$('.stop').html("<img src=" + "'files/images/white-stop.png'"+ ">")
		}
		*/
		alert('h');
	}

	function currentSlide(){
		$(this).siblings('.btn').removeClass('current');
		$(this).addClass('current');
		
		var dataId = $('.current').attr("data-slide");
		var id = "#slide-" + dataId;
		$('.active').removeClass('active').addClass('oldActive');
		$(id).addClass('active');
		$('.oldActive').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':nth-of-type(3)')){
			$('.background-image').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.background-image').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')){
			$('.background-image').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.background-image').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});