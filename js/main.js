$(function(){

$('.banner-setion__slider').slick({
  dots: true,
  prevArrow: '<button class="banner-setion__slider-btn banner-setion__slider-btnprev" ><img src="images/content/arrow-left.svg" alt=""></button>',
  nextArrow: '<button class="banner-setion__slider-btn banner-setion__slider-btnnext" ><img src="images/content/arrow-right.svg" alt=""></button>',
});



$('.tab').on('click', function (e) {
  e.preventDefault();

$('.tab').removeClass('tab--active');
$('.tabs-content').removeClass('tabs-content--active');

$(this).addClass('tab--active');
$($(this).attr('href')).addClass('tabs-content--active');

});

$('.filter-style').styler();

});