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
        $('html,body').animate({scrollTop: (aTag.offset().top-56)},1000);
    }


    function animateElement() {
      $('.animate-in-viewport').each(function() {
        const topV = $(window).scrollTop()
        const topE = $(this).offset().top
        const bottomE = $(this).offset().top+$(this).height()
        if (topV > (topE - ($(window).height()/2)) && topV < (bottomE - ($(window).height()/2))) {
          $(this).removeClass('animate-in-viewport')
          $(this).addClass($(this).data('animate'))
        }
      })
      /*
      $('.animate-when-visible').each(function(index, obj) {
        if ($(this).hasClass('animated')) {
          // do nothing as already happened
        } else {
          if (($(window).scrollTop() > $(this).offset().top) && ($(window).scrollTop() < ($(this).offset().top+$(this).height()))) {
            $(this).addClass('animated')
            $(this).find('.animate-in-viewport').each(function() {
              $(this).removeClass('hide-animated-element')
              $(this).addClass('animate__animated animate__slideInLeft')
            })
          }
        }
      })
      */
    }

    $(".anchor-link").on('click', function() {
      var location = $(this).data('location');
       scrollToAnchor(location);
    })

    $(window).scroll(function(){
      var viewportHeight = $(window).height();
      var scrollHeight = $(window).scrollTop();
      if(scrollHeight >= (viewportHeight/2)){
        $('a#backtotop').show();
      } else {
        $('a#backtotop').hide();
      }

      if (scrollHeight > 10) {
        $('#topnavheader').addClass('scrolled')
      } else {
        $('#topnavheader').removeClass('scrolled')
      }

      animateElement()
    });
    animateElement()
})(jQuery);
