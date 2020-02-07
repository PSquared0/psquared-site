$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname &&
      this.hash.replace(/#/, '')) {
      var $targetId = $(this.hash),
        $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;

        $(this).click(function() {
          $("#nav li a").removeClass("active");
          $(this).addClass('active');
          $('html, body').animate({
            scrollTop: targetOffset
          }, 1000);
          return false;
        });
      }
    }
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 50 ) {
      $('.active.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.active.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})

