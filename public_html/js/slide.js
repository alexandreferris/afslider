/*************************************
Author: Alexandre Ferris
Year: 2016
Website: http://rivott.com.br
E-mail: contato@rivott.com.br
*************************************/
(function ( $ ) {
	$.fn.afslider = function( opts ) {
		var options = $.extend( {}, $.fn.afslider.defaults, opts);

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
	};
	
	$.fn.afslider.defaults = {
		texto: 'Meu texto',
		

		/* Default variables */
		responsive: true,		/* True or False */
		position: 'absolute',		/* static, relative, fixed, absolute */
		width: '100vw',			/* 100vw or set width */
		height: '100vh',		/* 100vh or set height */
		zindex: '-1',
		autoplay: true			/* True of False */
	}
}( jQuery ));
