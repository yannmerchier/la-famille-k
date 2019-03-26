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
$(".wine1").click(function () {
    $('body').css("background-image", "url(HERITIERE.png)");
    $('.content').stop().simpleAccordion();
});
$(".wine2").click(function () {
    $('body').css("background-image", "url(LA_GRANDE_DAME.png)");
    $('.content').stop().simpleAccordion();
});
$(".wine3").click(function () {
    $('body').css("background-image", "url(PATRIARCHE.png)");
});
$('.pane1').click(function () {
    $('.submenu1').animate({
        right: '0em'
    }, 700);
});
$('.backArrow1').click(function () {
    $('.submenu1').animate({
        right: '-30em'
    }, 700);
});
$('.pane2').click(function () {
    $('.submenu2').animate({
        right: '0em'
    }, 700);
});
$('.backArrow2').click(function () {
    $('.submenu2').animate({
        right: '-50em'
    }, 700);
});
};
$(document).ready(main);
