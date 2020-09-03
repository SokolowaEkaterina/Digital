$(document).ready(function(){

    $('#menu_togle').on('click', function(){
        $('#menu_togle').toggleClass('menu-icon-active');
        $('#mobile-nav').slideToggle();
    });
    
    $('.slider').slick({
        arrows:false,
        slidesToShow: 5,
    });

    $('.slider_information').slick({
        arrows:false,
        slidesToShow:1,
    });
});