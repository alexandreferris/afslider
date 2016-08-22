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
				slideItems.fadeOut(2000);
				nextSlide.fadeIn(2000);
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
		interval: '1000'			/* Interval between each slide */
	}
}( jQuery ));
