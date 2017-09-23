/* ==========================================================================
  Author's custom script
  ========================================================================== */

"use strict";

var tile = $('.landing-tile');
var mapWrap = $('.map-wrap');
var folioContainer = $('.folio-container');
var productBox = $('.product-box');
var productImg = $('.product-img');
var productCounts = productBox.length;
var innerHeight = $(window).innerHeight();

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

$(document).ready(function() {
  resizeTiles(innerHeight);
  resizeMap(innerHeight);
  resizeFolio(innerHeight);
  resizeProductBox(innerHeight, productCounts);
});
