<!DOCTYPE>
<html>
<head>
	<meta charset="UTF-8">
	<title>AFSlider - A jQuery Slide Plugin</title>
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css" />

	<!-- JS / jQuery -->
	<script type="text/javascript" src="/js/jquery-2.2.4.js"></script>
	<script type="text/javascript" src="/js/slide.js"></script>
</head>
<body>
	<div id="slide">
		<div class="item">
			<span>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan lectus a congue facilisis.</span>
			<img src="img/img1.jpg" />
		</div>
		<div class="item">
			<span>2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan lectus a congue facilisis.</span>
			<img src="img/img2.jpg" />
		</div>
		<div class="item">
			<span>3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan lectus a congue facilisis.</span>
			<img src="img/img3.jpg" />
		</div>
	</div>

	<div style="width: 100vw;height:100vh;float:left;text-align:center;">
		<div id="btnprev"></div>
		<div id="btnnext"></div>
		<div id="dots"></div>
	</div>

	<script type="text/javascript">
		$("#slide").afslider({
			interval: '5000',
			dots: true,
			dotsid: 'dots',
			autoplay: true,
			centertext: true,
			buttons: true,
			btnprev: 'btnprev',
			btnnext: 'btnnext'
		});
	</script>
</body>
</html>
