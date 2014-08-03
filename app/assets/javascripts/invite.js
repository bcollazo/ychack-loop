$(document).ready(function() {
	$(".user-row").click(function() {
		$(this).addClass("active");
	});

	$("#invite_all_btn").click(function() {
		submit_sentence("EVERYONE");
	});

	$("#invite_some_btn").click(function() {
		var invitees = "";
		$(".user-row.active").each(function(i, e) {
			invitees += $(this).data("id") + ",";
		});
		if (invitees.length > 0) {
			invitees = invitees.substring(0, invitees.length-1);
		}
		console.log(invitees);
		submit_sentence(invitees);
	});

	var submit_sentence = function(audience) {
		var data = {};

		var hour = parseInt($("#start").data("hour"));
		var d = new Date();
		d = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, 0, 0, 0)
		data["start"] = d;

		var duration = parseInt($("#duration").data("duration"));
		data["duration"] = duration;

		data["invitees"] = audience;

		console.log(data);
		$.post("/sentence", data, function(data) {
			console.log(data);
			if (data) {
				location.href = "/matched";
			}
		});
	}


});