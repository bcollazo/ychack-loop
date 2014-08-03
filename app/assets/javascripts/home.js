

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

	$("#startModal .dropdown-menu a").click(function() {
		var hour = $(this).text();
		var dhour = $(this).data("hour");
		console.log(dhour);
		$("#start_dropdown").text(hour);
		$("#start").text(hour);
		$("#start").attr("data-hour", dhour);
	});

	$("#hang_btn").click(function() {
		$("#sentence_page").fadeOut(function() {
			$("#invite_page").fadeIn();
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
			if (data) {
				$(".request-row[data-id="+id+"]").fadeOut();
			}
		});
	});

});