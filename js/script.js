$(document).ready(function(){
	$('.header__burger').click(function(){
		$(this).toggleClass('active');
		$('.header__social').toggleClass('active');
		$('.header__toggle').toggleClass('active');
	});
	$('.interface__slides').slick({
		  centerMode: true,
		  // autoplay: true,
		  // autoplaySpeed: 2000,
		  centerPadding: '0',
		  slidesToShow: 5,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
		});


	$('.kit__slider-img').slick({
		  centerMode: true,
		  centerPadding: '0',
		  slidesToShow: 3,
		  asNavFor: ".kit__slider-reviews",
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '0',
		        slidesToShow: 1
		      }
		    }
		  ]
		});
	$('.kit__slider-reviews').slick({
		  centerMode: true,
		  centerPadding: '0',
		  arrows: false,
		  slidesToShow: 1,
		  fade: true,
		  asNavFor: ".kit__slider-img"
		});
	// $(window).resize(function(){
	// 	console.log($('.slick-center').width());
	// 	$('.phone-img').width($('.slick-center').width() + 100);
	// 	console.log('gg:' + $('.phone-img').width());
	// });

	$('#plan__btn').on('click', function (e) {
	    e.preventDefault();
	});
	$('.plan__individual').click(function(){
		$(this).addClass('active');
		$('.plan__company').removeClass('active');
		$('.plan__you-are').removeClass('active');
		$('.change-cost').text('$4.99')
	});
	$('.plan__company').click(function(){
		$(this).addClass('active');
		$('.plan__individual').removeClass('active');
		$('.plan__you-are').addClass('active');
		$('.change-cost').text('$11.99')
	});
	$('.box_pro').click(function(){
		$('.plan__pro').addClass('active');
		$('.plan__starter').removeClass('active');
	});
	$('.box_starter').click(function(){
		$('.plan__starter').addClass('active');
		$('.plan__pro').removeClass('active');
	});
});

