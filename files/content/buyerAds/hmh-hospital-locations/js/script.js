$(document).ready(function () {
    let slideIndex = 0;
    const slides = $('.slide'); 
    const dots = $('.dot'); 
    
    function showSlides(index) { 
        slides.removeClass('active').hide(); 
        dots.removeClass('active'); 
        
        if (index >= slides.length) { 
            slideIndex = 0; 
        } else if (index < 0) { 
            slideIndex = slides.length - 1; 
        } 
        
        slides.eq(slideIndex).addClass('active').show(); 
        dots.eq(slideIndex).addClass('active'); 
    } 
    
    $('.next').click(function () { 
        slideIndex++; 
        showSlides(slideIndex); 
    }); 
    
    $('.prev').click(function () { 
        slideIndex--; 
        showSlides(slideIndex); 
    }); 
    
    $('.dot').click(function () { 
        slideIndex = $(this).index(); 
        showSlides(slideIndex); 
    }); 
    
    // Initial display 
    showSlides(slideIndex); 
});