<!DOCTYPE>
<html>
<head>
	<meta charset="UTF-8">
	<title>Slide Plugin</title>
	
	<!-- JS / jQuery -->
	<script type="text/javascript" src="/js/jquery-2.2.4.js"></script>
	<script type="text/javascript" src="/js/slide.js"></script>
</head>
<body>
	<style>
		.logo {
			width: 150px;
    		margin-left: 20px;
    		margin-top: 20px;
		}
		#slide {
			background-color: #009900;
		}
		#slide .item img {
			width: 100vw;
			height: 100vh;
			position: absolute;
			top: 0px;
			left: 0px;
		}
		#slide .item span {
			width: 80vw;
			max-width: 80vw;
			margin-left: 10vw;
			margin-right: 10vw;
			position: absolute;
			z-index: 1;
			font-size: 40px;
			text-align: center;
			white-space:normal;
			color: white;
		}
	</style>

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

	<!-- <h1>Slide Plugin</h1> -->
	<img src="img/logo.png" class="logo" />

	<script type="text/javascript">
		$("#slide").afslider({
			texto: 'Meu outro texto'
		});
	</script>
</body>
</html>
