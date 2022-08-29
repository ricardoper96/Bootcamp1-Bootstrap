//default settings:

autoplay:false
autoplayTimeout:3000
autoplayHoverPause:false


$(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        video:true,
        responsive: {
            0:{
                items: 1,
                nav: true
            },
            600:{
                items:1,
                nav: false
            },
            1000:{
                items:1,
                nav:true,
                loop: false
            }
        }
    });
});
