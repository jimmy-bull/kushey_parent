

//Get the button FOR SCROLLING TO TOP
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
        $(".computer_menu").fadeIn("slow");
        $('.computer_menu').css({
            'position': "fixed",
            "z-index": "1000000000000000",
            "background-color": "#fff",
            "boxShadow": "0 10px 15px rgba(25, 25, 25, 0.1)",
            "animation": "fadeInDown",
            "animation-duration": "0.5s",
            'padding-bottom': "35px"
        });
        $('.main_nav_home6').css({
            'position': "fixed",
            "z-index": "1000000000000000",
            "background-color": "#fff",
            "boxShadow": "0 10px 15px rgba(25, 25, 25, 0.1)",
            "animation": "fadeInDown",
            "animation-duration": "0.5s",
            'width': "100%",
        });
        /*  $('.header').css({
              'position': "fixed",
              'width': "100%",
              'bottom': 0,
              'z-index': 100,
              'transition': 'all .5s'
          });*/

        $('.my_nav_link').css({
            'color': "#666",
        });
        //For Menu on Home2 Page
        $(".home2_nav").fadeIn("slow");
        $('.home2_nav').css({
            'position': "fixed",
            "z-index": "1000000000000000",
            "background-color": "#fff",
            "boxShadow": "0 10px 15px rgba(25, 25, 25, 0.1)",
            "animation": "fadeInDown",
            "animation-duration": "0.5s",
            'padding-bottom': "35px"
        });
        $('.txt_search_home2').removeClass('col-lg-4')
        $('.txt_search_home2').addClass('col-lg-11')


        $('#search_icons_on_scroll').show();
    } else {
        mybutton.style.display = "none";
        $('.computer_menu').css({
            "z-index": "10000",
            "background-color": "rgba(117, 190, 218, 0.0)",
            "boxShadow": "none",
            "animation-duration": "0.5s",
            "animation": "fadeInUp",
        });
        $('.main_nav_home6').css({
            'position': "relative",
            "animation": "fadeInUp",
            "animation-duration": "0.5s",
            'width': "100%",
            "boxShadow": "none",
        });
        $('.my_nav_link').css({
            'color': "white",
        });
        /*$('.header').css({
            'position': "relative",
            'width': "100%"
        });*/
        //For Menu on Home2 Page
        $('.home2_nav').css({
            "z-index": "10000",
            "background-color": "rgba(117, 190, 218, 0.0)",
            "boxShadow": "none",
            "animation-duration": "0.5s",
            "animation": "fadeInUp",
        });
        $('.txt_search_home2').removeClass('col-lg-11')
        $('.txt_search_home2').addClass('col-lg-4')
        $('#search_icons_on_scroll').hide();
    }
}

$("#myBtn").on('click', function (event) {

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
        scrollTop: 0
    }, 800, function () {

    });

});


$('.miniature_grid').hover(function (e) {
    $(this).parent().parent().prev().children("img.principale_grid_image").attr("src", $(this).attr('src'))
})


//TO DISABLE SCROLLING 
var y_offsetWhenScrollDisabled = 0;
function disableScrollOnBody() {
    y_offsetWhenScrollDisabled = $(window).scrollTop();
    $('body').addClass('scrollDisabled').css('margin-top', -y_offsetWhenScrollDisabled);
}
function enableScrollOnBody() {
    $('body').removeClass('scrollDisabled').css('margin-top', 0);
    $(window).scrollTop(y_offsetWhenScrollDisabled);
}



$('.open_search_box').click(function (e) {
    $(".my_own_moda_search").css({
        "width": "100%",
        "animation": "slideInLeft",
        "animation-duration": ".5s",
    });
    disableScrollOnBody();
})

$('.close_modal_search').click(function (e) {
    $(".my_own_moda_search").css({
        "width": "0",
        "animation": "slideOutLeft",
        "animation-duration": ".5s",
    });
    enableScrollOnBody();
})

let my_own_moda_search = document.getElementById('my_own_moda_search');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == my_own_moda_search) {
        $(".my_own_moda_search").css({
            "width": "0",
            "animation": "slideOutLeft",
            "animation-duration": ".5s",
        });
        enableScrollOnBody();
    }
}


$(document).ready(function () {
    $(".owl_home2").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        navSpeed: 1000,
        dragEndSpeed: 1000,
        stagePadding: 50,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

    let owl_home2 = $('.owl_home2');
    owl_home2.owlCarousel();
    // Go to the next item
    $('.btn_right_carousel_home2').click(function () {
        owl_home2.trigger('next.owl.carousel', [1000]);
    })
    // Go to the previous item
    $('.btn_left_carousel_home2').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl_home2.trigger('prev.owl.carousel', [1000]);
    })

    $('.li_links_main_menu_ul').hover(function (e) {
        $(this).siblings().children('a').css({
            'color': 'black',
            'letter-spacing': '1px',
            "transition": 'all .2s',
            'border-bottom-style': 'none'
        })

        $(this).children('a').css({
            'color': 'teal',
            'letter-spacing': '2px',
            "transition": 'all .2s',
            'border-bottom-style': 'solid'
        })
        // $(this).children('span.et-menu-toggle').addClass('et-menu-toggle_active')
    });

    $('.li_links_main_menu_ul').eq(0).children("a").css({
        'color': 'teal',
        'letter-spacing': '2px',
        "transition": 'all .2s',
        'border-bottom-style': 'solid'
    })

    $('.sub_menu_main_menu_ul').eq(0).css({
        "display": 'block',
    })
    //Menu
    $('.open_main_menu_side').click(function (e) {
        $('.sidebar_main_menu').css({
            "width": "100%",
            "animation": "slideInLeft",
            "animation-duration": ".5s",
        });
        disableScrollOnBody();
    })

    $('.close_main_menu').click(function (e) {
        $(".sidebar_main_menu").css({
            "width": "0",
            "animation": "slideOutLeft",
            "animation-duration": ".5s",
        });
        enableScrollOnBody();
    })

    $('.li_links_main_menu_ul').hover(function (e) {
        $(this).children(".sub_menu_main_menu_ul").show()
        $(this).siblings().children(".sub_menu_main_menu_ul").css({
            "display": 'none'
        })
    })
});




//WHEN PAGE IS TEAL LOADING
$('.loading_space').css('width', "100%");
$('.loading_space_child').show()
disableScrollOnBody();
window.onload = function (e) {
    $('.loading_space').css('width', "0%");
    $('.loading_space_child').hide()
    enableScrollOnBody() //TO ENABLE SCROLLING WHEN PAGE ISN'T LOADING
}

