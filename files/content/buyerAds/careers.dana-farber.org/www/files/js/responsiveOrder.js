function adjustStyle(width) {
    width = parseInt(width);
    $(".edu-prof-data").last().addClass("highlight");
    var docAddr = $(".docAddress");
    //var facAddr = $(".fac-Addre");
    if (width <= 767) {
        $('.nav-cont').slideUp(200);
        $("#navbar").removeClass('in');
        $(".mobHeadLinks").removeClass('in');
        $('.main-nav li').removeClass('open');

        if ($(".fb-box").parent().siblings().length <= 0)
        {
            $(".right-ver-cta").hide();
        }
        $(".loc-srch-filter.newsEventFilter").insertAfter(".tab_helper>div");
        if ($(".container-fluid.main-container").children("#resLet-orde").length > 0) {
            $(".container-fluid.main-container").addClass("sing-ColLa");
        }
        if (width <= 420) {
            $(".docAddress").remove();
            $(".doc-img-box").append(docAddr);
            // $(".fac-Addre").remove();
            //$(".doc-img-box").append(facAddr);
        }
        else {
            $(".docAddress").remove();
            $(".doc-prof-deta").append(docAddr);
            // $(".fac-Addre").remove();
            //$(".fac-prof-deta").append(facAddr);
        }
        //$(window).on('orientationchange', function (event) {
        //    if (!$(".msHamber").hasClass('collapsed')) {
        //        $("#navbar,.mobHeadLinks").addClass('in');
        //    }
        //});
       
    }
    else if (width > 767) {
        $(".docAddress").remove();
        $(".doc-prof-deta").append(docAddr);
        // $(".fac-Addre").remove();
        //$(".fac-prof-deta").append(facAddr);

        $(".container-fluid.main-container").removeClass("sing-ColLa");
        var fbCount = $(".fb-box").parent().siblings();

        //More to Explore box Responsive heiht functionality
        var maxHeight = 0;
        var boxes = jQuery('.res-heightjs');
        maxHeight = Math.max.apply(
            Math, boxes.map(function () {
                return jQuery(this).height();
            }).get());
        boxes.css({ "min-height": "65px", "height": maxHeight+"px" });
        $(".allNav").hide();
        $('.main-nav li').show();
        $(".loc-srch-filter.newsEventFilter").insertBefore(".srch-count-results");
        //Navigation Expanded Menu of links mouse over action to change white box data
        $(".dropdownCon > ul > li > a").hover(function (event) {
            //var inItem = $(this).index();
            var target = $(this).parent().attr('data-target');
            // $(".dropdownConUL>li:not([data-source='" + target + "'])").hide();
            var dropDownTxt = $(".dropdownConUL >li[data-source='" + target + "']").children().children().children();
            if (dropDownTxt.length > 0) {
                $(".dropdownConUL >li[data-source='" + target + "']").show();
                $(".dropdownConUL >li:not([data-source='" + target + "'])").hide();
            }
            else {
                $(".dropdownConUL >li").hide();
            }


        });
    }
}

$(function () {
    adjustStyle($(this).width());
    $(window).resize(function () {
        adjustStyle($(this).width());
    });
});
