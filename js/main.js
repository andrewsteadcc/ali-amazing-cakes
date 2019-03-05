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
})(jQuery);
