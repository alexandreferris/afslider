<h1>AFSlider - A jQuery Slide Plugin</h1>

<h5>Objective</h5>
Use knowledge of my skills in HTML, CSS and jQuery to make a image/text slide plugin.

## Getting started

Clone the repository

```bash
git clone https://github.com/alexandreferris/afslider.git
```

Or [download a ZIP](https://github.com/alexandreferris/afslider/archive/master.zip)
and extract the files to your webserver( vagrant, apache, nginx ) folder.

You can change the name of **public_html** to your specific webserver folder name such as *www*, *html*, *public*, *etc*.

## How To

### Include the JS file into your new html file.
```html
  <script type="text/javascript" src="/afslider.js"></script>
```

### Include the CSS file into your new html file.
```html
  <link rel="stylesheet" type="text/css" href="afslider.css" />
```

### Create the new element with desired *id* for the slider.
```html
  <div id="slide">
  
  </div>
```

### Create some slides with texts ( optional )
```html
  <div id="slide">
		<div class="item">
			<span>Some random text</span>
			<img src="image1.jpg" />
		</div>
		<div class="item">
			<span>Some random text 2</span>
			<img src="image2.jpg" />
		</div>
  </div>
```

### Starting the plugin.
```js
$("#slide").afslider({
	interval: '5000',
	autoplay: true,
	centertext: true
});
```

##### Now wait the magic to happen!




## Features

| name          | default       | options                                          |
| ------------- | ------------- | ------------------------------------------------ |
| position		  | absolute      | static, relative, fixed, absolute                |
| width		 	    | '100vw'       | px, vw, %                                        |
| height		    | '100vh'       | px, vh, %                                        |
| zindex		    | '-1'          | -9999 to 9999                                    |
| centertext	  | false         | true or false                                    |
| autoplay		  | false         | true or false                                    |
| interval		  | '1000'        | Interval between each slide in milliseconds      |
| speedFadeIn	  | 1500          | time in milliseconds                             |
| speedFadeOut	| 1500          | time in milliseconds                             |
| dots		 	    | false         | true or false                                    |
| dotsid		    | false         | ID of dots wrapper (e.g. dots_wrapper)           |
| buttons		    | false         | true or false                                    |
| btnprev		    | false         | ID of button previous element (e.g. btn_prev)    |
| btnnext		    | false         | ID of button next element (e.g. btn_next)        |




<br><br><br><br><br>

Author: Alexandre Ferris<br>
E-mail: ferris.alexandre@gmail.com<br>
Website: http://rivott.com.br<br>
Built in: 2016
