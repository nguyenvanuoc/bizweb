(function($) {
    "use strict";
    if ($('.scroll-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.scroll-top').addClass('show');

                } else {
                    $('.scroll-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
            
        });
        $('.scroll-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    $(window).load(function() {
        $('.nivoSlider').nivoSlider({
            effect: 'random',
            animSpeed: 500,
            pauseTime: 8000,
            controlNav: true,
            directionNav: true,

            controlNavThumbs: false,

        });
    });

    $('.slider-customer').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.slider-news').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        arrows:false,
        slidesToScroll: 2,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    });
    $('.sec-news .nav-slider .nav.prev').click(function(){
      $('.slider-news').slick('slickPrev');
    });

    $('.sec-news .nav-slider .nav.next').click(function(){
      $('.slider-news').slick('slickNext');
    });
    $(".nav-collapse").click(function(){
        if($(".menus").hasClass("show")){
            $(".menus").removeClass("show");
            $(".common-overlay").removeClass("show");
        }else{
            $(".menus").addClass("show");
            $(".common-overlay").addClass("show");
        }
    });
    $(".common-overlay").click(function(){
        if($(".common-overlay").hasClass("show")){
            $(".menus").removeClass("show");
            $(".common-overlay").removeClass("show");
        }else{
            $(".menus").addClass("show");
            $(".common-overlay").addClass("show");
        }
    });
    if($(window).width()<991){
        $(".header-menu .menus > .menu__item").click(function(){
           $(this).toggleClass("active");
        });
    }
})(jQuery);

var LP=new function __LP(){
    this.init=function(){
        $(window).scroll(function(){
            fixHeader();
            
        });
        fixHeader();
        console.log("Test");
    };
    
    function fixHeader(){
        var top=$(window).scrollTop();
        
        if (top>60){
            if (!$(".header").hasClass("scrolled")){
                $(".header").addClass("scrolled");
            }
        }else{
            $(".header").removeClass("scrolled");
        }
    }
};
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
LP.init();
