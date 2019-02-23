// 'use strict';

$(document).ready(function () {
  'use strict';
  // $('body').hide().fadeIn(3000);

  let current_delay = 3000;
  $("#title").css("opacity", 0).animate({
    opacity: 1
  }, 10000);
  $("#menu").css("opacity", 0).delay(current_delay).animate({
    opacity: 1
  }, 4000);
  $(".icons li").delay(current_delay).each(function () {
    current_delay += 100;
    console.log(current_delay);
    $(this).css({
      opacity: 0,
      top: "-20px"
    }).delay(current_delay).animate({
      opacity: 1,
      top: 0
    }, 0);
  });
  current_delay += 3000;
  $("#footer").delay(current_delay).css("opacity", 0).animate({
    opacity: 1
  }, 4000);
  $("#rights").delay(current_delay).css("opacity", 0).animate({
    opacity: 1
  }, 5000);
  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles-js config loaded');
    setTimeout(function () {
      console.log('Page is loaded');
    }, 3000);
  });
});

// preloader
jQuery(window).on('load', function () {
  $preloader = $('.pre-loader');
  $loader = $preloader.find('.pre-loader');
  $loader.fadeOut();
  $preloader.delay(2000).fadeOut('slow');
});

// forbiddance
document.ondragstart = noSelect;
document.oncontextmenu = noSelect;
document.onselectstart = noSelect;

function noSelect() {
  return false
}
