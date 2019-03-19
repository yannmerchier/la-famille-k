/*jslint browser: true*/
/*global $, jQuery*/
var main = function () {
    'use strict';
    $('.anchorLink').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 30
        }, 1300);
        return false;
    });
    $('.menu_icon').click(function () {
        $('.mobile-menu').animate({
            right: '0em'
        }, 200);
        $('.banner').blur();
    });
    // $(".wine1").click(function() {
    //     $('body').css("background", "url(HERITIERE.png) no-repeat center center fixed");
    //     $('body').css("background-size", "cover");
    // });
    // $(".wine2").click(function() {
    //     $('body').css("background", "url(LA_GRANDE_DAME.png) no-repeat center center fixed");
    //     $('body').css("background-size", "cover");
    // });
    // $(".wine3").click(function() {
    //     $('body').css("background", "url(PATRIARCHE.png) no-repeat center center fixed");
    //     $('body').css("background-size", "cover");
    // });
    $(".wine1").click(function () {
        $('body').stop().fadeOut("1000", function () {
            $('body').css("background", "url(LA_GRANDE_DAME.png) no-repeat center center fixed").fadeIn(1000);
        });
        }, function () {
            $('body').stop().fadeOut("1000", function () {
            $('body').css("background", "url(HERITIERE.png) no-repeat center center fixed").fadeIn(1000);
            $('body').css("background-size", "cover").fadeIn(1000);
    });
});
    $(".wine2").click(function () {
        $('body').stop().fadeOut("1000", function () {
            $('body').css("background", "url(LA_GRANDE_DAME.png) no-repeat center center fixed").fadeIn(1000);
        });
        }, function () {
            $('body').stop().fadeOut("1000", function () {
            $('body').css("background", "url(LA_GRANDE_DAME.png) no-repeat center center fixed").fadeIn(1000);
            $('body').css("background-size", "cover").fadeIn(1000);
    });
});
$(".wine3").click(function () {
    $('body').stop().fadeOut("1000", function () {
        $('body').css("background", "url(LA_GRANDE_DAME.png) no-repeat center center fixed").fadeIn(1000);
    });
    }, function () {
        $('body').stop().fadeOut("1000", function () {
        $('body').css("background", "url(PATRIARCHE.png) no-repeat center center fixed").fadeIn(1000);
        $('body').css("background-size", "cover").fadeIn(1000);
});
});
};
$(document).ready(main);
