/*
const menu2 = document.getElementById('menu2');
const submenu = document.getElementById('submenu');
const hamburger = document.getElementById('hamburger'); 
const mobileMenu = document.getElementById('mobileMenu'); 
const closeMenu = document.getElementById('closeMenu'); 

menu2.addEventListener('click', () => { 
    submenu.style.display = 'block'; 
}); 

// Not working   Close the popup window when clicking outside of the image
submenu.addEventListener('click', function(event) {
    console.log('1');
    if (event.target === this) {
        console.log('2');
        this.style.display = 'none';
    }
})

hamburger.addEventListener('click', () => { 
    mobileMenu.style.display = 'block'; 
}); 

closeMenu.addEventListener('click', () => { 
    mobileMenu.style.display = 'none'; 
});
*/

$(document).ready(function() { 
    // Show submenu when Menu 2 is clicked 
    $('.menu2').click(function(event) { 
        event.stopPropagation(); // Prevent event from bubbling up to the document 
        $(this).find('.submenu').toggle(); // Toggle the submenu within the clicked menu2 
    }); 
        
    // Close submenu when the close button is clicked 
    $('#closesubMenu').click(function(event) { 
        event.stopPropagation(); // Prevent event from bubbling up to the menu2 
        $(this).closest('.submenu').hide(); // Hide the submenu containing the clicked close button 
    }); 
        
    // Close submenu when clicking outside of it 
    $(document).click(function() { 
        $('.submenu').hide(); // Hide all submenus 
    }); 

    $('.hamburger').click(function(){
        $('.mobile-menu').show();
        $('.hamburger').hide();
    });
    
    $('#closeMenu').click(function(){
        $('.mobile-menu').hide();
        $('.hamburger').show();
    });
});