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

$('.filter__item-drop, .filter__extra').on('click', function () {
  $(this).toggleClass('filter__item-drop--active');
  $(this).next().slideToggle('200');
});


$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 100000,
  max: 500000,
});


$('.catalog__filter-btngrid ').on('click', function () {
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btnline').removeClassClass('catalog__filter-button--active');
      $('.product-item__wrapper').removeClassClass('product-item__wrapper--list');
});

$('.catalog__filter-btnline').on('click', function () {
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btngrid').removeClassClass('catalog__filter-button--active');
      $('.product-item__wrapper').addClass('product-item__wrapper--list');
});








});