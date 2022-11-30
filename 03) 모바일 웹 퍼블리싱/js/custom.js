$(function () {
	//Include html Files
	$('.gnb-include').load('/include/gnb.html')
	$('.main-header-include').load('/include/main-header.html')

	// Category Accordion
	$('.category-accordion .detail').eq(0).show()
	$('.category-accordion .title').click(function () {
		$(this).addClass('active')
		$(this).siblings('.category-accordion .title').removeClass('active')
		$(this).siblings('.category-accordion .detail').stop().slideUp()
		$(this).next().stop().slideDown()
	})

	// Recent Search Result
	$('.search-recent .btn-clear').click(function () {
		$(this).parent('.item').hide()
	})

	$('.search-recent .btn-all-clear').click(function () {
		$('.search-recent .item').hide()
	})
})