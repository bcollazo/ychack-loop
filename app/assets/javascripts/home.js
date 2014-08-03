

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
		$.post("/sentence", data, function(data) {
			console.log(data);
			if (data) {
				location.href = "/invite"; //Change to effect
			}
		});
	});

	$(".send-request-btn").click(function() {
		var id = $(this).data("id");
		var btn = $(this);
		if ($(this).text() == "Send Friend Request") {
			$.post("/friend_request", {requestee_id: id}, function(data) {
				if (data) {
					btn.removeClass("btn-primary");
					btn.addClass("btn-default");
					btn.attr("disabled", true);
					btn.text("Request Sent!");
				}
			});
		}
	});

	$(".accept-request-btn").click(function() {
		var id = $(this).data("id");
		$.post("/accept_friend", {requestee_id: id}, function(data) {
			console.log(data);
		});
	});

});