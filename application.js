/*jslint browser: true*/
/*global $, jQuery*/
var main = function () {
    'use strict';
    $('.anchorLink').click(function () {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1300);
        return false;
    });
    // $('.menu_icon').click(function () {
    //     $('.mobile-menu').animate({
    //         right: '0em'
    //     }, 200);
    //     $('.banner').blur();
    // });
};
$(document).ready(main);
