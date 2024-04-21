$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll>=50){
        $(".sticky").addClass("stickyadd")
    }else{
        $(".sticky").removeClass("stickyadd")
    }
});


        $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) { 
                    $('.navbar-brand-img img').attr('src','/images/5.png');
                }
                if ($(this).scrollTop() < 50) { 
                    $('.navbar-brand-img img').attr('src','/images/4.png');
                }
            })
        });
    
