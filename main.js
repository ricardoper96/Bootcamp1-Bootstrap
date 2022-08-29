//default settings:

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
