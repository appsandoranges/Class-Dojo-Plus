var g = document.createElement('script'); 
var s = document.getElementsByTagName('script')[0]; 
g.text = "var isChromeExtension = true;" 
s.parentNode.insertBefore(g, s);

var script = document.createElement("script");
    script.setAttribute("src", chrome.extension.getURL("class-dojo-plus.js"));

script.addEventListener('load',function() {
	console.log("loaded");
}, false);
document.body.appendChild(script);