(function ($) {
    // Start of use strict
    "use strict";
    /*------------------------------------------------
    * Jarallax
    ------------------------------------------------*/
    jarallax(document.querySelectorAll('.jarallax'));


    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        //56px is the size of the fixed nav header
        $('html,body').animate({scrollTop: (aTag.offset().top-80)},1000);
    }


    function animateElement() {
      $('.animate-in-viewport').each(function() {
        const topV = $(window).scrollTop()
        const topE = $(this).offset().top
        const bottomE = $(this).offset().top+$(this).height()
        /*
        if (topV > (topE - ($(window).height()/2)) && (topV < (bottomE - ($(window).height()/2)) || topV === 0)) {
          $(this).removeClass('animate-in-viewport')
          $(this).addClass($(this).data('animate'))
        }
        */
        /*
        const topViewport = bottomE-$(window).height()
        const bottomViewport = topE+$(window).height()
        if (topV >= topViewport && topV <= bottomViewport) {
          $(this).removeClass('animate-in-viewport')
          $(this).addClass($(this).data('animate'))
        }
        */
        const itemCenter = topE+($(this).height()/2)
        if (topV < itemCenter && (topV+$(window).height()) > itemCenter) {
          $(this).removeClass('animate-in-viewport')
          $(this).addClass($(this).data('animate'))
        }
      })
    }


    function headerChange() {
      var viewportHeight = $(window).height();
      var scrollHeight = $(window).scrollTop();
      if(scrollHeight >= (viewportHeight/2)){
        $('#backtotop').show();
      } else {
        $('#backtotop').hide();
      }

      if (scrollHeight > 10) {
        $('#topnavheader').addClass('scrolled')
      } else {
        $('#topnavheader').removeClass('scrolled')
      }
    }

    $(".anchor-link").on('click', function() {
      var location = $(this).data('location');
       scrollToAnchor(location);
    })

    $(window).scroll(function(){
      headerChange()
      animateElement()
    });
    animateElement()
    headerChange()
})(jQuery);
