/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
    
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 600,
        autoHeight: false,
        autoplay: false
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });
    


    

})(jQuery);

const tshirtSizes = {
    "wolf": {
        beige: { S: 6, M: 2, L: 2 },        
        terracota: { S: 8, M: 3, L: 2},

    },
    "cruz": {
        beige: { S: 3, M: 4, L: 2 },
        terracota: { S: 8, M: 2, L: 2 },
        black: { S: 0, M: 0, L: 0 },


    },
    "routine": {
        beige: { S: 6, M: 1, L: 2 },
        terracota: { S: 4, M: 2, L: 2 },

    }
};

const tshirtPrices = {
   
    "cruz": {
        beige: "$ 1390",
        terracota: "$ 1390",
        black: "SOLD OUT"

    }
};




function changeImage(id,modelo, color) {
    var videoPath = 'img/shirts/model-' + modelo + '-' + color + '.mp4';
    //var imagePathFront = 'img/shirts/model-' + modelo + '-' + color + '.mp4';

    var backImage = document.getElementById('tshirt-video-'+ modelo +'-' + id);
   // var frontImage = document.getElementById('tshirt-image-front-' + id);

    
   // if (backImage && frontImage) {
    if (backImage) {  
        var carousel = $(`#tshirt-${modelo}`);

        // Destruir el carrusel actual
        $( `#tshirt-${modelo}`).trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded').find('.owl-stage-outer').children().unwrap();

        // Remover contenido actual (imágenes)
        carousel.empty();
        
            // Agregar nuevas imágenes
        carousel.html(
            `           
            <div class="ci-thumb set-bg">
                <video id="tshirt-video-${modelo}-${id}" alt="Model Classic" loop autoplay muted playsinline>
                    <source src="${videoPath}" id="tshirt-video-${modelo}-${id}" type="video/mp4">

                    Tu navegador no soporta la etiqueta de video.
                </video>                                
            </div>
            
            `
        );

        $(`#tshirt-${modelo}`).addClass('owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            dots: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            smartSpeed: 600,
            autoHeight: false,
            autoplay: false
        });

    
        


        // Actualizar el texto de talles basado en el id y color
        var sizes = tshirtSizes[modelo][color];
        var sizesText = `S : ${sizes.S} | M : ${sizes.M} | L : ${sizes.L}`;
        var price = tshirtPrices[modelo][color];

        document.getElementById(`tshirt-talles-${modelo}`).innerText = sizesText;
        document.getElementById(`tshirt-price-${modelo}`).innerText = price;


    } else {
        console.error('Imágenes no encontradas:', backImage, frontImage);
    }
}
/* <div class="ci-thumb set-bg">
                <img src="${imagePathFront}" id="tshirt-image-front-${id}" alt="Model Classic Front">
            </div>
            <div class="ci-thumb set-bg">
                <img src="${videoPath}" id="tshirt-image-back-${id}" alt="Model Classic Back">
            </div>*/