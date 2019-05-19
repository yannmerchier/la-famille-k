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
    $('body').css("background-image", "url(img/HERITIERE.png)");
});
$(".wine2").click(function () {
    $('body').css("background-image", "url(img/LA_GRANDE_DAME.png)");
});
$(".wine3").click(function () {
    $('body').css("background-image", "url(img/PATRIARCHE.png)");
});
$(".wine4").click(function () {
    $('body').css("background-image", "url(img/heritiere_white_background_and_bottle.png)");
});
$(".wine5").click(function () {
    $('body').css("background-image", "url(img/mere_white_background_and_bottle.png)");
});
$(".wine6").click(function () {
    $('body').css("background-image", "url(img/pere_white_background_and_bottle.png)");
});
// $('.pane1').click(function () {
//     $('.submenu1').animate({
//         right: '0em'
//     }, 700);
// });
// $('.backArrow1').click(function () {
//     $('.submenu1').animate({
//         right: '-30em'
//     }, 700);
// });
// $('.pane2').click(function () {
//     $('.submenu2').animate({
//         right: '0em'
//     }, 700);
// });
// $('.backArrow2').click(function () {
//     $('.submenu2').animate({
//         right: '-50em'
//     }, 700);
// });
};
$(document).ready(main);
