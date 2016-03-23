<h1>Website Performance Optimization Project</h1>
![](http://progressed.io/bar/100?title=Progress)
<p>Optimize the critical rendering path of an exisiting online portfolio to achieves Pagespeed Insights score above 90 and runs at 60 frames per second by applying the techniques in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).</p>

<h2>Techniques are used to optimize the website:</h2>
<ul>
  <li>Inline CSS to <a href="https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery">optimize CSS delivery</a></li>
	
	<li>Add async tag to js source to avoid render blocking</li>
	<li>Use <a href ="https://github.com/typekit/webfontloader">Web Font Loader</a> to load fonts</li>
	<li>Fixed two major issues in views/js/main.js to achieve 60 frames per second</li>
	<li>Uses Grunt to automatically perform optimizations
	  <ul>
	  	<li>JS and CSS files minify</li>
		<li>Images compressed</li>
	  </ul>	
	</li>
</ul>

<h2>Testing:</h2>
<p>Use <a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a> to test following pages</p>
<ul>
	<li><a href="http://hongbinc.github.io/Frontend-WebsiteOptimization/">index.html</a></li>
	<li><a href="http://hongbinc.github.io/Frontend-WebsiteOptimization/project-2048.html">project-2048.html</a></li>
	<li><a href="http://hongbinc.github.io/Frontend-WebsiteOptimization/project-webperf.html">project-webperf.html</a></li>
	<li><a href="http://hongbinc.github.io/Frontend-WebsiteOptimization/project-mobile.html">project-mobile.html</a></li>
</ul>
   Use `Google Developer tool` to test the following page runs in 60fps
<ul>
  <li><a href="http://hongbinc.github.io/Frontend-WebsiteOptimization/views/pizza.html">pizza.html</a></li>
</ul>
