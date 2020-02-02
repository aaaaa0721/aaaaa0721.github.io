/* Loader
-----------------------------------------------------------------------------------*/

$(window).on('load', function() {

    "use strict";
    // Load the page and wait 1s.
    $('#loader').delay(1000).fadeOut('slow');

});

$(document).ready(function() {

    "use strict";


    /* AOS
    -----------------------------------------------------------------------------------*/

    if ($("[data-aos]").length) {
        AOS.init();
    }

    /* Video Player
    -----------------------------------------------------------------------------------*/
    if ($("#video-wrap").length) {
        $('#video-wrap').YTPlayer({
            showControls: false,
            playerVars: {
                modestbranding: 0,
                autoplay: 1,
                controls: 1,
                showinfo: 0,
                wmode: 'transparent',
                branding: 0,
                rel: 0,
                autohide: 0,
                origin: window.location.origin
            }
        });
    }

    /* Vegas Slider
    -----------------------------------------------------------------------------------*/

    if ($("#slider").length) {
        $("#slider").vegas({
            delay: 7000,
            timer: true,
            shuffle: true,
            firstTransition: 'fade2',
            firstTransitionDuration: 2000,
            transition: 'fade2',
            transitionDuration: 4000,
            slides: [{
                    src: "./img/portfolio_1.jpg"
                },
                {
                    src: "./img/portfolio_2.jpg"
                },
                {
                    src: "./img/portfolio_3.jpg"
                },
                {
                    src: "./img/portfolio_4.jpg"
                }
            ]
        });
    }

    /* Scroll Up
    -----------------------------------------------------------------------------------*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    /* Simple Count Down 
    -----------------------------------------------------------------------------------*/

    if ($('#countdown').length) {
        // Set the date we're counting down to
        var countDownDate = Date.parse('15 Mar 2020 14:00:00');

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with class="countdown"
            document.getElementById('countdown').innerHTML =
                "<ul>" +
                "<li>" + "<h2>" + days + "</h2>" + "<h4>days</h4>" + "</li>" +
                "<li>" + "<h2>" + hours + "</h2>" + "<h4>hours</h4>" + "</li>" +
                "<li>" + "<h2>" + minutes + "</h2>" + "<h4>min</h4>" + "</li>" +
                "<li>" + "<h2>" + seconds + "</h2>" + "<h4>sec</h4>" + "</li>" +
                "</ul>";

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById('countdown').innerHTML = "EXPIRED";
            }
        }, 1000);
    }


    /* Sticky Nav
    -----------------------------------------------------------------------------------*/

    $(window).on('scroll', function() {

        var sliderHeight = $("#slider").outerHeight();
        var blogHeight = $("#blog-header").outerHeight();
        var videoHeight = $("#video-bg").outerHeight();

        /* Full Width */
        ($(window).scrollTop() > sliderHeight) ? $('#primary-navbar').addClass('affix'): $('#primary-navbar').removeClass('affix');
        ($(window).scrollTop() > blogHeight) ? $('#primary_navbar_blog').addClass('affix'): $('#primary_navbar_blog').removeClass('affix');

        /* Box Layouth */
        ($(window).scrollTop() > sliderHeight) ? $('#primary-navbar-box').addClass('affix'): $('#primary-navbar-box').removeClass('affix');
        ($(window).scrollTop() > blogHeight) ? $('#primary_navbar_blog_box').addClass('affix'): $('#primary_navbar_blog_box').removeClass('affix');

        /* Video Layouth */
        ($(window).scrollTop() > videoHeight) ? $('#primary-navbar-video').addClass('affix'): $('#primary-navbar-video').removeClass('affix');

    });

    /* Isotope Plugin Settings
    -----------------------------------------------------------------------------------*/

    if ($('.grid').length) {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: false,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });

        $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');
        });
    };

    // filter functions
    var filterFns = {

        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('.filters-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


    /* Magnific Popup Plugin Settings
    -----------------------------------------------------------------------------------*/

    /* image */
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 6] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });

    /* youtube video, vimeo, google maps */
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    /* Bootstrap Collapse
    -----------------------------------------------------------------------------------*/

    (function() {

        $(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
            if (e.type === 'show') {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

    }).call(this);


    /* Owl Carousel
    -----------------------------------------------------------------------------------*/

    $('#comment-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        touchDrag: true,
        autoplay: true,
        loop: true,
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450
    });


});