
$(document).ready(function() {
    $(".showHide-content").hide();
    
    $(".showHideDiv").click(function(){
            $(this).next(".showHide-content").fadeToggle(900);
    });
});

  function hideContent(id) {
  		jQuery('.showHide-content').hide(400);
  }
