// 'use script';
$('.skills').hide().fadeIn(3000);
$('.skill-01').hide().delay(1000).fadeIn(3000);
$('.skill-02').hide().delay(2000).fadeIn(3000);
$('.skill-03').hide().delay(3000).fadeIn(3000);
$('.skill-04').hide().delay(4000).fadeIn(3000);
$('.skill-05').hide().delay(5000).fadeIn(3000);
$('.skill-06').hide().delay(6000).fadeIn(3000);
$('.skill-07').hide().delay(7000).fadeIn(3000);
$('.skill-08').hide().delay(8000).fadeIn(3000);
$('.skill-09').hide().delay(9000).fadeIn(3000);
$('.skill-10').hide().delay(10000).fadeIn(3000);
$('.skill-11').hide().delay(11000).fadeIn(3000);
$('.skill-12').hide().delay(12000).fadeIn(3000);
$('.skill-13').hide().delay(13000).fadeIn(3000);
$('.skill-14').hide().delay(14000).fadeIn(3000);
$('.skill-15').hide().delay(15000).fadeIn(3000);
$('.skill-16').hide().delay(16000).fadeIn(3000);
$('.skill-17').hide().delay(17000).fadeIn(3000);
$('.skill-18').hide().delay(18000).fadeIn(3000);

$(document).ready(function () {
  // 'use strict';
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

// forbiddance
document.ondragstart = noSelect;
document.oncontextmenu = noSelect;
document.onselectstart = noSelect;

function noSelect() {
  return false
}