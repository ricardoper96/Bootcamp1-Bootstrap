//default settings:
//$(window).on("scroll", function () {
//
//         if ($(window).scrollTop() > $("header").offset().top - 50) {
//             $(".navbar-main").removeClass("background-header");
//             $('.img-header-id').removeClass('img-header');
//         }
//
//         if ($(window).scrollTop() == 0){
//
//             $(".navbar-main").addClass("background-header");
//             $('.img-header-id').addClass('img-header');
//
//         }
//
//
//     });
autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false

$(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true
    });
});
