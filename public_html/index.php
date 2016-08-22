<!DOCTYPE>
<html>
<head>
	<meta charset="UTF-8">
	<title>Slide Plugin</title>
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css" />

	<!-- JS / jQuery -->
	<script type="text/javascript" src="/js/jquery-2.2.4.js"></script>
	<script type="text/javascript" src="/js/slide.js"></script>
</head>
<body>
	<div id="slide">
		<div class="item">
			<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan lectus a congue facilisis.</span>
			<img src="img/img1.jpg" />
		</div>
		<div class="item">
			<span>Texto Especial 2</span>
			<img src="img/img2.jpg" />
		</div>
	</div>

	<div style="width: 100vw;height:100vh;float:left;text-align:center;">
		<img src="img/logo.png" class="logo" />
	</div>

	<h1>Slide Plugin</h1>
	

	<script type="text/javascript">
		$("#slide").afslider({
			interval: '3000'
		});
	</script>
</body>
</html>
