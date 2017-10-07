/* ==========================================================================
  Author's custom script
  ========================================================================== */

"use strict";

var tile = $('.landing-tile');
var mapWrap = $('.map-wrap');
var folioContainer = $('.folio-container');
var servicesBg = $('.services-container');
var productMain = $('.product-container');
var innerHeight = $(window).innerHeight();
var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
  {
 // height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
  onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
      // console.log(percent);
  }
});
var $header_top = $('.header');
var $nav = $('nav');

$(window).resize(function(event) {
  /* Act on the event */
  var h = $(window).innerHeight();
  setInterval(resizeTiles(h), 400);
  setInterval(resizeMap(h), 400);
  setInterval(resizeFolio(h), 400);
  setInterval(resizeProductBox(h), 400);

});

function resizeTiles(h) {
  tile.animate({height: h/2}, 200);
}

function resizeMap(h) {
  mapWrap.animate({height: h/2}, 400);
}

function resizeFolio(h) {
  folioContainer.animate({height: h-112}, 400);
}

function resizeProductBox(h) {
  productMain.animate({height: h - 112}, 400);
}

function fateOfElem() {
  if ($(window).width() <= 768) {
    elem.destroy();
  }
  else {
    elem.reinitialize();
  }
}

function resizeServiceBg(h) {
  var uh = h-112;
  servicesBg.animate({height: uh}, 400);
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

$(document).ready(function() {
  resizeTiles(innerHeight);
  resizeMap(innerHeight);
  resizeFolio(innerHeight);
  resizeServiceBg(innerHeight);
  resizeProductBox(innerHeight);

  $('body').on('click', '.product', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).toggleClass('active');
  });
});

// Full Page Vertical Slider

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#F0F2F4', '#fff', '#fff'],
  sectionSelector: '.vertical-scrolling',
  // slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    // console.log(anchorLink);
    // console.log(index);
    if(anchorLink == 'secondSection') {
      $("#second-section .section-img").animateCss('slideInUp');
      $("#second-section .section-title").animateCss('fadeInLeft');
      $("#second-section .section-subtitle").animateCss('fadeInRight');
    }

    if(anchorLink == 'thirdSection') {
      $("#third-section .section-img").animateCss('slideInDown');
      $("#third-section .section-title").animateCss('slideInLeft');
      $("#third-section .section-subtitle").animateCss('slideInRight');
    }
  },

  onLeave: function(index, nextIndex, direction) {
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'secondSection') {
      $(".second-section .section-title").animateCss('bounceInUp');
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
  }
});
