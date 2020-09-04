$(document).ready(function(){

//МЕНЮ//
    $('#menu_togle').on('click', function(){
        $('#menu_togle').toggleClass('menu-icon-active');
        $('#mobile-nav').slideToggle();
    });

//СЛАЙДЕР//
    $('.slider').slick({
        arrows:false,
        slidesToShow: 5,
        slidesToScroll: 5,
        focusOnSelect: true,

        touchMove:false,
        draggable:false,
        swipe:false,

        asNavFor: ".slider_information",

        responsive:[
            {
                breakpoint: 691,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    //infinite:false,
                    arrows: true,
                    centerMode:true,
                    
                    touchMove:true,
                    draggable:true,
                    swipe:true,
                }
            },{
                breakpoint: 552,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode:true,

                    touchMove:true,
                    draggable:true,
                    swipe:true,
                }
            },{
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    centerMode:true,

                    touchMove:true,
                    draggable:true,
                    swipe:true,
                }
            }
        ]
    });

    $('.slider_information').slick({
        slidesToShow:1,
        arrows:false,

        fade:true,
        asNavFor: ".slider",
        touchMove:false,
        draggable:false,
        swipe:false,
    }); 
});