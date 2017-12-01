/* eslint strict: 0 */
"use strict";

/*
 * This is a separate file for two reasons:
 * 1. CSP policy does not allow inline javascript
 * 2. It has to be a small javascript executed before all other scripts,
 *    so that the timeout can be triggered while slow JS is loading
 */

setTimeout(function() {
	var element = document.getElementById("loading-slow");

	if (element) {
		element.style.display = "block";
	}
}, 5000);

document.getElementById("loading-slow-reload").addEventListener("click", function() {
	location.reload();
});

if ("ErrorEvent" in window) {
	window.g_LoungeErrorHandler = function LoungeErrorHandler(error) {
		var title = document.getElementById("loading-title");
		title.textContent = "An error has occured";

		var element = document.createElement("p");
		element.textContent = "An error has occured that prevented the client from loading correctly.";
		title.parentNode.appendChild(element);

		element = document.createElement("p");
		element.textContent = "Open developer tools in your browser and check javascript console for more information.";
		title.parentNode.appendChild(element);

		element = document.createElement("p");
		element.contentEditable = true;
		element.textContent = error.message;
		title.parentNode.appendChild(element);
	};

	window.addEventListener("error", window.g_LoungeErrorHandler);
}
