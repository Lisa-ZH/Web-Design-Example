// JavaScript Document
jQuery(function($){
  const iframes = document.querySelectorAll('iframe');
  console.log(iframes);
  $(window).on('load', function(){
    $('#tab-2').attr('aria-selected', 'false');
  });
  $('.tab-nav button').on('click', function(e){
    e.preventDefault();
    $('.tab').attr('aria-selected', 'false');
    $('.tab-nav button').removeClass('is-active');
  
    $(this).addClass('is-active');
    $('#'+$(this).attr('aria-labelledby')).attr('aria-selected', 'true');
    iframes.forEach((el, i) => {
      let player = new Vimeo.Player(el);
      player.pause();
   }); 
  });
});