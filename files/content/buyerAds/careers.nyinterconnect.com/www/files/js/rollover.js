//=============================================
// rollover 2016
//=============================================

function initRollovers() {
    if (!document.getElementById) return

    var aPreLoad = new Array();
    var sTempSrc;
    var aImages = document.getElementsByTagName('img');

    for (var i = 0; i < aImages.length; i++) {
        if (aImages[i].className.indexOf('imgover') !== -1) {
            var src = aImages[i].getAttribute('src');
            var ftype = src.substring(src.lastIndexOf('.'), src.length);
            var hsrc = src.replace(ftype, '-on' + ftype);

            aImages[i].setAttribute('hsrc', hsrc);

            aPreLoad[i] = new Image();
            aPreLoad[i].src = hsrc;

            aImages[i].onmouseover = function() {
                sTempSrc = this.getAttribute('src');
                this.setAttribute('src', this.getAttribute('hsrc'));
            }

            aImages[i].onmouseout = function() {
                if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('-on' + ftype, ftype);
                this.setAttribute('src', sTempSrc);
            }
        }
    }
}

if (window.addEventListener) { //for W3C DOM
    window.addEventListener("load", initRollovers, false);
} else if (window.attachEvent) { //for IE
    window.attachEvent("onload", initRollovers);
} else {
    window.onload = initRollovers;
}


//window.onload = initRollovers;



