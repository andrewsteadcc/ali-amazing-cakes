(function ($) {
    // Start of use strict
    "use strict";
    /*------------------------------------------------
    * Jarallax
    ------------------------------------------------*/
    jarallax(document.querySelectorAll('.jarallax'));


    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},1000);
    }

    $(".anchor-link").on('click', function() {
      var location = $(this).data('location');
       scrollToAnchor(location);
    });

    $(window).scroll(function(){
      var viewportHeight = $(window).height();
      var scrollHeight = $(window).scrollTop();
      if(scrollHeight >= (viewportHeight/2)){
        $('a#backtotop').show();
      } else {
        $('a#backtotop').hide();
      }
    });
})(jQuery);
