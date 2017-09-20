/* ==========================================================================
  Author's custom script
  ========================================================================== */

"use strict";

var tile = $('.landing-tile');
var innerHeight = $(window).innerHeight();

$(window).resize(function(event) {
  /* Act on the event */
  var h = $(window).innerHeight();
  setInterval(resizeTiles(h), 400);
});

function resizeTiles(h) {
  tile.animate({height: h/2}, 200);
}

$(document).ready(function() {
  resizeTiles(innerHeight);
});
