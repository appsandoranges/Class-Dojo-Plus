var script = document.createElement("script");
    script.setAttribute("src", chrome.extension.getURL("class-dojo-plus.js"));

script.addEventListener('load',function() {
	console.log("loaded");
}, false);
document.body.appendChild(script);