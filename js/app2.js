/*jslint browser: true*/
/*global $, jQuery*/
$( document ).ready(function() {
    $(window).scroll(function() {
   var hT = $('#scroll-to-red').offset().top,
       hH = $('#scroll-to-red').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
       $('.Redbottle1').animate({
               left: '5em'
           }, 2000);
       $('.Redbottle2').animate({
           left: '5em'
       }, 2100);
       $('.Redbottle3').animate({
           left: '5em'
       }, 2150);
       $('.red_desc').animate({
           bottom: "1em", opacity: 1
       }, { duration: 500, queue: false })
   }
    });
    $(window).scroll(function() {
   var hT = $('#scroll-to-white').offset().top,
       hH = $('#scroll-to-white').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
       $('.Whitebottle1').animate({
               right: '-3em'
           }, 2000);
       $('.Whitebottle2').animate({
           right: '-3em'
       }, 2100);
       $('.Whitebottle3').animate({
           right: '-3em'
       }, 2150);
       $('.white_desc').animate({
           bottom: "1em", opacity: 1
       }, { duration: 500, queue: false })
   }
    });
    $('.desc').animate({
        bottom: "1em", opacity: 1
    }, { duration: 2500, queue: false })
});
