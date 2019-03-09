// 'use script';
$('.skills').hide().delay(2500).fadeIn(3000);
$('.wrapper-skills-grid').hide().delay(4000).fadeIn(3000);

$('.skill-01').hide().delay(5500).fadeIn(3000);
$('.skill-02').hide().delay(5800).fadeIn(3000);
$('.skill-03').hide().delay(6100).fadeIn(3000);
$('.skill-04').hide().delay(6400).fadeIn(3000);
$('.skill-05').hide().delay(6700).fadeIn(3000);
$('.skill-06').hide().delay(7000).fadeIn(3000);
$('.skill-07').hide().delay(7300).fadeIn(3000);
$('.skill-08').hide().delay(7600).fadeIn(3000);
$('.skill-09').hide().delay(7900).fadeIn(3000);
$('.skill-10').hide().delay(8200).fadeIn(3000);
$('.skill-11').hide().delay(8500).fadeIn(3000);
$('.skill-12').hide().delay(8800).fadeIn(3000);
$('.skill-13').hide().delay(9100).fadeIn(3000);
$('.skill-14').hide().delay(9400).fadeIn(3000);
$('.skill-15').hide().delay(9700).fadeIn(3000);
$('.skill-16').hide().delay(10000).fadeIn(3000);
$('.skill-17').hide().delay(10300).fadeIn(3000);
$('.skill-18').hide().delay(10600).fadeIn(3000);

// preloader
jQuery(window).on('load', function () {
  $preloader = $('.pre-loader');
  $loader = $preloader.find('.pre-loader');
  $loader.fadeOut();
  $preloader.delay(2000).fadeOut('slow');
});

setTimeout(function () {
  console.log('Page is loaded');
}, 3000);

// preloader animation css
const preLoaderAnimationHomePage = document.querySelector('.pre-loader-text');
preLoaderAnimationHomePage.classList.add('animated', 'flipInY', 'slow');

// title skills animation
const animateTitleSkills = document.querySelector('.skills');
animateTitleSkills.classList.add('animated', 'infinite', 'pulse');

// forbiddance
document.ondragstart = noSelect;
document.oncontextmenu = noSelect;
document.onselectstart = noSelect;

function noSelect() {
  return false
}