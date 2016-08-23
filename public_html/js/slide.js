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

		function changeDots() {
			if(options.dots && options.dotsid) {
				$("#"+options.dotsid+" ul").children("li").removeClass("active");
				$("#"+options.dotsid+" ul").children("li").eq(currentIndex).addClass("active");
			}
		}
		function moveSlide() {
			var nextSlide = slideItems.eq(currentIndex);
			slideItems.fadeOut(options.speedFadeOut);
			nextSlide.fadeIn(options.speedFadeOut);

			// Dots
			changeDots();
		}

		/* Slide dimensions */		
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
		if(options.centertext) {
			$(this).children('div.item').children('span').each(function(i) {
				$(this).css({
					'top': '50%',
					'margin-top': '-'+($(this).height() / 2)
				})
			});
		}

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
				
				/* move slide */
				moveSlide();
			});

			/* Next button */
			$("#"+options.btnnext).click(function() {
				currentIndex += 1;
				if(currentIndex > (slideAmount - 1)) {
					currentIndex = 0;
				}

				/* move slide */
				moveSlide();
			});
		}

		/* dots */
		if(options.dots && options.dotsid) {
			var dotsElem = $("#"+options.dotsid);

			/* Add HTML dots */
			var dotsHTML = '<ul>';
			for (i = 0; i < slideAmount; i++) {
			    dotsHTML += '<li></li>';
			}
			dotsHTML += '</ul>';
			dotsElem.append(dotsHTML);

			/* reposition dots center */
			$(dotsElem.children('ul')).css({
				'left': '50%',
				'margin-left': '-'+dotsElem.children('ul').width()
			})

			/* click change dot */
			dotsElem.children('ul').children('li').click(function() {
				/* get li index position */
				currentIndex = $(this).index();

				/* move to slide */
				moveSlide();
			});

			/* change active dots */
			changeDots();
		}

		/* if autoplay enabled start moving slides */
		if(options.autoplay) {
			/* setInterval for loop */
			var sliderAutoPlay = setInterval(function() {
				currentIndex += 1;
				if(currentIndex > (slideAmount - 1)) {
					currentIndex = 0;
				}

				/* move slide */
				moveSlide();
			}, options.interval);
		}
	};
	
	/* Default variables */
	$.fn.afslider.defaults = {
		responsive: true,		/* True or False */
		position: 'absolute',		/* static, relative, fixed, absolute */
		width: '100vw',			/* 100vw or set width */
		height: '100vh',		/* 100vh or set height */
		zindex: '-1',
		centertext: false,
		autoplay: true,			/* True of False */
		interval: '1000',		/* Interval between each slide */
		speedFadeIn: 1500,		/* fadeIn in milliseconds */
		speedFadeOut: 1500,		/* fadeOut in milliseconds */
		dots: false,
		dotsid: false,
		buttons: false,
		btnprev: false,			/* ID of button previous element (e.g. btn_prev) */
		btnnext: false 			/* ID of button next element (e.g. btn_next) */
	}
}( jQuery ));
