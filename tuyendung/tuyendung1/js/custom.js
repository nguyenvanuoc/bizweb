
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
            $(".header .box-menus").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }else{
            $(b).toggleClass("active");
            $(".header .box-menus").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }
    }
};


(function($) {
    "use strict";
    LP.init();
})(jQuery);