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

    $('.slider-partner').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        arrows:false,
        slidesToScroll: 5,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        ]
    });
    
})(jQuery);

var LP=new function __LP(){
    this.init=function(){
        $(window).scroll(function(){
            fixHeader();
            
        });
        fixHeader();   
        $(".menus .item").click(function(){
            $(this).toggleClass("active");
        });
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
    this.expandMenu=function(a,b){
        if(a=="open"){
            $(b).toggleClass("active");
            $(".header-menu").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }else{
            $(b).toggleClass("active");
            $(".header-menu").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }
    }
};
LP.init();
