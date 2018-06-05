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
    $(".nav-toggle").click(function(){
        if($(".sidebar").hasClass("show")){
            $(".sidebar").removeClass("show");
            $(".common-overlay").removeClass("show");
        }else{
            $(".sidebar").addClass("show");
            $(".common-overlay").addClass("show");

        }
    });
    $(".common-overlay").click(function(){
        if($(this).hasClass("show")){
            $(".sidebar").removeClass("show");
            $(".common-overlay").removeClass("show");
        }else{
            $(".sidebar").addClass("show");
            $(".common-overlay").addClass("show");

        }
    });
})(jQuery);