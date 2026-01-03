
$(document).ready(function() {
    $(".showHide-content").hide();
    
    $(".showHideDiv").click(function(){
        $(".showHide-content").fadeToggle(900);
    });
});

/*function hideContent(id) {
  	$(".showHide-content").hide(400);
}
*/