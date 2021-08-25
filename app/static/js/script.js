(function ($) {
    'use strict';

    var $window = $(window);

    //$('body').bind('cut copy paste',function(e){e.preventDefault()});$("body").on("contextmenu",function(e){return!1});document.onkeydown=function(e){if(e.ctrlKey&&(e.keyCode===67||e.keyCode===86||e.keyCode===85||e.keyCode===117)){alert('This is not allowed');return!1}else{return!0}};$(document).keydown(function(event){if(event.keyCode==123){return!1}
    //else if((event.ctrlKey&&event.shiftKey&&event.keyCode==73)||(event.ctrlKey&&event.shiftKey&&event.keyCode==74)){return!1}});var isCtrl=!1;document.onkeyup=function(a){17==a.which&&(isCtrl=!1)},document.onkeydown=function(a){if(17==a.which&&(isCtrl=!0),85==a.which||67==a.which&&1==isCtrl)return!1};

    $('.navi-menu-button').on('click', function(e){
        navMenuOpen();
    });

    $('.nav-menu').on('click', function(e){
        if ($(e.target).hasClass('nav-menu')){
            navMenuClose();
        }
    });

    $('nav.menu ul.main-menu>li>a').on('click', function(e){
        var that = $(this);
        if (that.parent().find('ul:first').length)
        {
            e.preventDefault();
            if (!that.parent().hasClass('active'))
            {
                $('nav.menu ul.main-menu ul').slideUp('fast',function(){
                    $('nav.menu ul.main-menu > li').removeClass('active');
                });
                
                $('nav.menu ul li a span').removeClass('fa-angle-up').addClass('fa-angle-down');

                
                that.parent().find('ul:first').slideDown('fast',function(){
                    that.parent().addClass('active');
                });

                that.find('span').removeClass('fa-angle-down').addClass('fa-angle-up');
            }
            else
            {
                
                that.parent().find('ul:first').slideUp('fast',function(){
                    $(this).parent().removeClass('active');
                });
                that.find('span').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        }
        else
        {
            $('nav.menu ul.main-menu ul').slideUp('fast');
            $('nav.menu ul.main-menu > li').removeClass('active');
            that.parent().addClass('active');
        }
    });

     // :: Sticky Active Code
    $window.on("scroll", function(){
        if
      ($(document).scrollTop() > 86){
          $("#banner").addClass("shrink");
        }
        else
        {
            $("#banner").removeClass("shrink");
        }
    });


    // :: Carousel Active Code
    if ($.fn.owlCarousel) {

        $(".items_slides").owlCarousel({
            responsive: {
            0: {
                items: 1
            },
            991: {
                    items: 2
                },
            767:{
                    items: 1
                }
            },
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
        });

        var dot = $('.items_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });
    }

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.open-popup-link').magnificPopup({
          type:'inline',
          midClick: true 
        });
        $('.open-signup-link').magnificPopup({
          type:'inline',
          midClick: true 
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

     // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    
    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: 'Scroll Top'
        });
    }

    // :: onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 1500,
            easing: 'easeOutQuad'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.dream-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.dream-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: Accordian Active Code
    (function () {
        var dd = $('dd');
        dd.filter(':nth-child(n+3)').hide();
        $('dl').on('click', 'dt', function () {
            $(this).next().slideDown(500).siblings('dd').slideUp(500);
        })
    })();

    // :: niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".timelineBody").niceScroll();
    }

    if (document.querySelector('.simple_timer') !== null) {
        $('.simple_timer').syotimer({
            year: 2024,
            month: 3,
            day: 9,
            hour: 20,
            minute: 30
        })
    }
    

})(jQuery);

var navMenuOpen = function(){
    $('.navi-menu-button').addClass('focused');

    $('div.nav-menu').fadeIn(50,function(e){
        $('nav.menu').addClass('opened');
    });
}

var navMenuClose = function(){
    $('.navi-menu-button').removeClass('focused');

    $('nav.menu').removeClass('opened');
    $('div.nav-menu').fadeOut(200);
}
