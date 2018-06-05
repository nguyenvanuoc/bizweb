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
        $('.slider').nivoSlider({
            effect: 'random',
            animSpeed: 500,
            pauseTime: 8000
        });
        $('.slider').on('swipeleft', function(e) {
            $('a.nivo-nextNav').trigger('click');
            e.stopPropagation();
            return false;
        });
        $('.slider').on('swiperight', function(e) {
            $('a.nivo-prevNav').trigger('click');
            e.stopPropagation();
            return false;
        });
    });
    $(document).ready(function(){
        $('[data-toggle="tooltip"],[data-toggle="modal"]').tooltip();   
    });
    $('.slider-customer').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $('.section.-customers .navigation .nav.prev').click(function(){
      $('.slider-customer').slick('slickPrev');
    });

    $('.section.-customers .navigation .nav.next').click(function(){
      $('.slider-customer').slick('slickNext');
    });   
    $(".nav-toggle").click(function(){
        if($(".menu-category").hasClass("show")){
            $(".menu-category").removeClass("show");
            $(".common-overlay").removeClass("show");
        }else{
            $(".menu-category").addClass("show");
            $(".common-overlay").addClass("show");

        }
    });
    $(".common-overlay").click(function(){
        if($(this).hasClass("show")){
            $(".menu-category").removeClass("show");
            $(".common-overlay").removeClass("show");
        }else{
            $(".menu-category").addClass("show");
            $(".common-overlay").addClass("show");

        }
    });
})(jQuery);