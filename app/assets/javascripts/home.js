

// When ready...
window.addEventListener("load",function() {
	console.log("load");
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

$(document).ready(function() {

	$("#hang_btn").click(function() {
		var data = {};

		var hour = parseInt($("#start").data("hour"));
		var d = new Date();
		d = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, 0, 0, 0)
		data["start"] = d;

		var duration = parseInt($("#duration").data("duration"));
		data["duration"] = duration;

		

		console.log(data);
		// $.post("/sentence", data, function(data) {
		// 	console.log(data);
		// });
	});

});