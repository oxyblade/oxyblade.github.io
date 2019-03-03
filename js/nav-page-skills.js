// 'use script';
$('.skills').hide().delay(2500).fadeIn(3000);
$('.wrapper-skills-grid').hide().delay(4000).fadeIn(3000);

$('.skill-01').hide().delay(5500).fadeIn(3000);
$('.skill-02').hide().delay(6500).fadeIn(3000);
$('.skill-03').hide().delay(7500).fadeIn(3000);
$('.skill-04').hide().delay(8500).fadeIn(3000);
$('.skill-05').hide().delay(9500).fadeIn(3000);
$('.skill-06').hide().delay(10500).fadeIn(3000);
$('.skill-07').hide().delay(11500).fadeIn(3000);
$('.skill-08').hide().delay(12500).fadeIn(3000);
$('.skill-09').hide().delay(13500).fadeIn(3000);
$('.skill-10').hide().delay(14500).fadeIn(3000);
$('.skill-11').hide().delay(15500).fadeIn(3000);
$('.skill-12').hide().delay(16500).fadeIn(3000);
$('.skill-13').hide().delay(17500).fadeIn(3000);
$('.skill-14').hide().delay(18500).fadeIn(3000);
$('.skill-15').hide().delay(19500).fadeIn(3000);
$('.skill-16').hide().delay(20500).fadeIn(3000);
$('.skill-17').hide().delay(21500).fadeIn(3000);
$('.skill-18').hide().delay(22500).fadeIn(3000);

// preloader
jQuery(window).on('load', function () {
  $preloader = $('.pre-loader');
  $loader = $preloader.find('.pre-loader');
  $loader.fadeOut();
  $preloader.delay(2000).fadeOut('slow');
});

// preloader animation css
const  preLoaderAnimationHomePage = document.querySelector('.pre-loader-text');
preLoaderAnimationHomePage.classList.add('animated', 'flipInY', 'slow');

// title skills animation
const  animateTitleSkills = document.querySelector('.skills');
animateTitleSkills.classList.add('animated', 'infinite', 'pulse');

// forbiddance
document.ondragstart = noSelect;
document.oncontextmenu = noSelect;
document.onselectstart = noSelect;

function noSelect() {
  return false
}