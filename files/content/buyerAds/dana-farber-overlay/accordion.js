jQuery(document).ready(function () {
  function close_accordion_section() {
    jQuery('.event-pop-up .event-button').removeClass('active');
    jQuery('.event-pop-up .event-button').attr('aria-expanded', 'false');
    jQuery('.event-pop-up .event-button').text("View Upcoming Hiring Events");
    jQuery('.event-pop-up .event-content').slideUp(300).removeClass('open');
  }

  jQuery('.event-button').click(function (e) {
    var currentAttrValue = jQuery(this).attr('href');

    if (jQuery(e.target).is('.active')) {
      close_accordion_section();
    } else {
      close_accordion_section();

      jQuery(this).addClass('active');
      jQuery(this).attr('aria-expanded', 'true');
      jQuery('.event-pop-up .event-button').text("Hide Upcoming Hiring Events");
      jQuery('.event-pop-up ' + currentAttrValue).slideDown(300).addClass('open');
    }

    e.preventDefault();
  });
}); <!---->// JavaScript Document
