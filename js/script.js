$(document).ready(function(){

    $('#menu_togle').on('click', function(){
        $('#menu_togle').toggleClass('menu-icon-active');
        $('#mobile-nav').slideToggle();
    });
    
});