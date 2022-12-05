$(function () {
	/* Include html Files */
	$('.gnb-include').load('/include/gnb.html')
	$('.main-header-include').load('/include/main-header.html')
	$('.goods-detail-header-include').load('/include/goods-detail-header.html')

	/* Category Accordion */
	$('.category-accordion .detail').eq(0).show()
	$('.category-accordion .title').click(function () {
		$(this).addClass('active')
		$(this).siblings('.category-accordion .title').removeClass('active')
		$(this).siblings('.category-accordion .detail').stop().slideUp()
		$(this).next().stop().slideDown()
	})

	/* Recent Search Result */
	$('.search-recent .btn-clear').click(function () {
		$(this).parent('.item').hide()
	})

	$('.search-recent .btn-all-clear').click(function () {
		$('.search-recent .item').hide()
	})

	/* Cart Items */
	$('.cart-content .btn-all-clear').click(function () {
		$('.cart-item').hide()
	})
	$('.cart-item-title .btn-clear').click(function () {
		$(this).parent().parent().hide()
	})

	/* Front Slider */
	$('.front-slider').slick({
		slidesToShow: 1,
		dots: false,
		arrows: true,
		autoplay: false,
  		autoplaySpeed: 2000,
	});

	/* Goods Suggestion Slider */
	$('.goods-suggestion-items').slick({
		slidesToShow: 3,
		slidesToScroll: 2,
		dots: false,
		arrows: false,
	})

	/* Wish */
	$('.wish').click(function () {
		$(this).toggleClass('active')
	})

	/* Front Footer */
	$('.btn-view-more').click(function () {
		$('.company-info-more').slideToggle()
	})

	/* Goods Detail Slider */
		$('.goods-detail-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		})
	
	/* Goods Accordion */
	$('.goods-accordion .detail').eq(0).show()
	$('.goods-accordion .title').click(function () {
		$(this).addClass('active')
		$(this).siblings('.goods-accordion .title').removeClass('active')
		$(this).siblings('.goods-accordion .detail').slideUp()
		$(this).next().slideDown()
	})

	/* Goods Order Info */
	$('.btn-order-choice').click(function () {
		$('.overlay-fold').show()
		$('.goods-order-choice').hide()
		$('.goods-order-final').slideDown()
	}) 

	$('.btn-fold, .overlay-fold').click(function () {
		$('.overlay-fold').hide()
		$('.goods-order-choice').show()
		$('.goods-order-final').slideUp()
	}) 
})