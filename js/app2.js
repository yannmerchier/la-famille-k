/*jslint browser: true*/
/*global $, jQuery*/
$( document ).ready(function() {
    $('.bottle1').animate({
        left: '5em'
    }, 2350);
    $('.bottle2').animate({
        left: '5em'
    }, 2450);
    $('.bottle3').animate({
        left: '5em'
    }, 2500);
    // $('.desc').animate({opacity:1}, 1500);
    // $('.desc').animate({bottom:'1em'}, 1500);
    $('.desc').animate({
        bottom: "1em", opacity: 1
    }, { duration: 2500, queue: false })
});
