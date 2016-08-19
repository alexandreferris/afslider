/*************************************
Author: Alexandre Ferris
Year: 2016
Website: http://rivott.com.br
E-mail: contato@rivott.com.br
*************************************/
(function ( $ ) {
	$.fn.afslider = function( opts ) {
		/* Default variables */
		//var responsive = true; /* True or False */
		//var width = '100%'; /* 100% or set width */
		var options = $.extend( {}, $.fn.afslider.defaults, opts);
		
		this.html(options.texto);
		console.log(options);
	};
	
	$.fn.afslider.defaults = {
		texto: 'Meu texto',
		

		responsive: true,		/* True or False */
		position: 'static',		/* static, relative, fixed, absolute */
		width: '100vw',			/* 100vw or set width */
		height: '100vh',		/* 100vh or set height */
		autoplay: true			/* True of False */
		
	}
}( jQuery ));
