/* ==========================================================================
  Author's custom script
  ========================================================================== */

"use strict";

var tile = $('.landing-tile');
var mapWrap = $('.map-wrap');
var folioContainer = $('.folio-container');
var productBox = $('.product-box');
var productImg = $('.product-img');
var servicesBg = $('.services-container');
var productCounts = productBox.length;
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
  setInterval(resizeProductBox(h, productCounts), 400);

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

function resizeProductBox(h, c) {
  var uh = (h-112)/c;
  productBox.animate({height: uh}, 400);
  productImg.animate({height: uh}, 400);
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

$(document).ready(function() {
  resizeTiles(innerHeight);
  resizeMap(innerHeight);
  resizeFolio(innerHeight);
  resizeServiceBg(innerHeight);
  resizeProductBox(innerHeight, productCounts);
});

// Full Page Vertical Slider

// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  parallax: true,
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  }
});
