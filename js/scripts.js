'use strict';

$(document).ready(function() {
  $('body').hide().fadeIn(3000);

  let current_delay = 1000;
  $("#title").css("opacity", 0).animate({
    opacity: 1
  }, 1000);
  $("#menu").css("opacity", 0).delay(current_delay).animate({
    opacity: 1
  }, 1000);
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
  current_delay += 800;
  $("#footer").delay(current_delay).css("opacity", 0).animate({
    opacity: 1
  }, 3000);
  $("#rights").delay(current_delay).css("opacity", 0).animate({
    opacity: 1
  }, 3000);
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles-js config loaded');
  });
});













document.ondragstart = noSelect;
document.oncontextmenu = noSelect;
document.onselectstart = noSelect;
function noSelect() {
  return false
}
