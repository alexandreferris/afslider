/*************************************
Author: Alexandre Ferris
E-mail: contato@rivott.com.br
Website: http://rivott.com.br
Built in: 2016
*************************************/
(function ( $ ) {
	$.fn.afslider = function( opts ) {
		var options = $.extend( {}, $.fn.afslider.defaults, opts);
		var currentIndex = 0;
		var slideItems = $(this).children('div.item');
		var slideAmount = slideItems.length;

		/* Slide outer dimensions */		
		this.css({
			'position': options.position,
			'width': options.width,
			'height': options.height,
			'z-index': options.zindex
		});

		if(options.position == 'absolute') {
			this.css({
				'top': '0px',
				'left': '0px'
			});
		}

		/* Chaging inner text positioning */
		$(this).children('div.item').children('span').each(function(i) {
			$(this).css({
				'top': '50%',
				'margin-top': '-'+($(this).height() / 2)
			})
		});

		/* Hidding Slides */
		$(this).children('div.item').not(":first-child").hide();

		/* buttons */
		if(options.buttons) {
			/* Previous button */
			$("#"+options.btnprev).click(function() {
				currentIndex -= 1;
				if(currentIndex < 0) {
					currentIndex = slideAmount - 1;
				}
				console.log(currentIndex);
				/* get next slide */
				var nextSlide = slideItems.eq(currentIndex);
				slideItems.fadeOut(options.speedFadeOut);
				nextSlide.fadeIn(options.speedFadeOut);
			});

			/* Next button */
			$("#"+options.btnnext).click(function() {
				currentIndex += 1;
				if(currentIndex > (slideAmount - 1)) {
					currentIndex = 0;
				}
				/* get next slide */
				var nextSlide = slideItems.eq(currentIndex);
				slideItems.fadeOut(options.speedFadeOut);
				nextSlide.fadeIn(options.speedFadeOut);
			});
		}

		/* if autoplay enabled start moving slides */
		if(options.autoplay) {
			/* setInterval for loop */
			var sliderAutoPlay = setInterval(function() {
				currentIndex += 1;
				if(currentIndex > (slideAmount - 1)) {
					currentIndex = 0;
				}

				/* get next slide */
				var nextSlide = slideItems.eq(currentIndex);
				slideItems.fadeOut(options.speedFadeOut);
				nextSlide.fadeIn(options.speedFadeOut);
			}, options.interval);
		}
	};
	
	$.fn.afslider.defaults = {
		/* Default variables */
		responsive: true,		/* True or False */
		position: 'absolute',		/* static, relative, fixed, absolute */
		width: '100vw',			/* 100vw or set width */
		height: '100vh',		/* 100vh or set height */
		zindex: '-1',
		autoplay: true,			/* True of False */
		interval: '1000',		/* Interval between each slide */
		speedFadeIn: 1500,		/* fadeIn in milliseconds */
		speedFadeOut: 1500,		/* fadeOut in milliseconds */
		dots: false,
		buttons: false,
		btnprev: false,			/* ID of button previous element (e.g. btn_prev) */
		btnnext: false 			/* ID of button next element (e.g. btn_next) */
	}
}( jQuery ));
