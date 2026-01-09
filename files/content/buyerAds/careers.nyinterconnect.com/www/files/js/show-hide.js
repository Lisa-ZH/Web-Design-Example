
$(document).ready(function() {
    $(".showHidecontent").hide();
    
    $(".showHideDiv").click(function(){
            $(this).next(".showHidecontent").fadeToggle(900);
    });
});

  function hideContent(id) {
  		jQuery('.showHidecontent').hide(700);
  }
