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

	var hour_map = {
		"12:00pm":12,
		"1:00pm":13,
		"2:00pm":14,
		"3:00pm":15,
		"4:00pm":16,
		"5:00pm":17,
		"6:00pm":18,
		"7:00pm":19,
		"8:00pm":20,
		"9:00pm":21,
		"10:00pm":22,
		"11:00pm":23,
		"12:00pm":0,
		"1:00am":1,
		"2:00am":2,
		"3:00am":3,
		"4:00am":4,
		"5:00am":5,
		"6:00am":6,
		"7:00am":7,
		"8:00am":8,
		"9:00am":9,
		"10:00am":10,
		"11:00am":11
	}

	var submit_sentence = function(audience) {
		var data = {};

		var hour = $("#start").data("hour");
		var text = $("#start").text();
		hour = hour_map[text];

		var d = new Date();
		d = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, 0, 0, 0)
		d.setHours(hour);
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