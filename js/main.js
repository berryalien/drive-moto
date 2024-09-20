$(function(){

$('.banner-setion__slider').slick({
  dots: true,
  prevArrow: '<button class="banner-setion__slider-btn banner-setion__slider-btnprev" ><img src="images/content/arrow-left.svg" alt=""></button>',
  nextArrow: '<button class="banner-setion__slider-btn banner-setion__slider-btnnext" ><img src="images/content/arrow-right.svg" alt=""></button>',
});



$('.search__tabs-item').on('click', function(e){
  e.preventDefault();

$('.search__tabs-item').removeClass('search__tabs-item--active');
$('.search__content-item').removeClass('search__content-item--active');

$(this).addClass('search__tabs-item--active');
$($(this).attr('href')).addClass('search__content-item--active');

})

});