$(document).ready(function () {
    // Activate Carousel
    $("#carousel_big_5").carousel();

    /* Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
    
    });*/
    $("#carousel_big_5").on('slide.bs.carousel', function () {
        $('.img_carou_home_5').css({
            "animation": "heartBeat",
            "animation-duration": "2s",
        });
    });


});

