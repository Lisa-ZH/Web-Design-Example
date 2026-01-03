//Facebook Reload on Resize

var Resizer = Resizer || {};

$(window).on('resize', function() {
   setTimeout(function(){Resizer.FBReloader()}, 1500);
});
$(window).on('load', function() {
   setTimeout(function(){Resizer.FBReloader()}, 200);
});

Resizer.FBReloader = function () {
   //getting parent box width
   var container_width = (Number($('.facebook-container').width()) - Number($('.facebook-container').css('padding-left').replace("px", ""))).toFixed(0);
   if (!isNaN(container_width)) {
      $(".fb-page").attr("data-width", container_width);
   }
   if (typeof FB !== 'undefined' ) {
      FB.XFBML.parse();
   }
}
