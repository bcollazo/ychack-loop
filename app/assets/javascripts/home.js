

// When ready...
window.addEventListener("load",function() {
	console.log("load");
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});