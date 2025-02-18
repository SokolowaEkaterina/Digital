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

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 300, // offset (in px) from the original trigger point
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

});

