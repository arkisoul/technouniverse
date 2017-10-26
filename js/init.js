/* ==========================================================================
  Author's custom script
  ========================================================================== */
"use strict";

(function($){
  $(function(){
    $('.scrollspy').scrollSpy();

    $('.materialboxed').materialbox();

    var h = $(window).innerHeight();
    $('.slider').slider({
      height: h,
      indicators: false,
    });
    // $('.slider').slider('pause');

    setInterval(function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        $('#navbar').fadeIn('slow');
      } else {
        $('#navbar').fadeOut('slow');
      }
    }, 1000);

    // var options = [
    //   {selector: '#navbar', offset: 50, callback: function(el) {
    //     $(el).addClass('active')
    //   } },
    // ];
    // Materialize.scrollFire(options);
  }); // end of document ready
})(jQuery); // end of jQuery name space
