

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

	var usedActivities = [];

	$("#startModal .dropdown-menu a").click(function() {
		var hour = $(this).text();
		var dhour = $(this).data("hour");
		console.log(dhour);
		$("#start_dropdown").text(hour);
		$("#start").text(hour);
		$("#start").attr("data-hour", dhour);
	});

	$("#durationModal .dropdown-menu a").click(function() {
		var dur = $(this).text();
		var ddur = $(this).data("duration");
		console.log(ddur);
		$("#dropdownMenu1").text(dur);
		$("#duration").text(dur);
		$("#duration").attr("data-duration", ddur);
	});


	$("#activitiesModal a").click(function() {
		var $parent = $(this).parents('li');
		$parent.css('display', 'none');
		var val = $(this).text();
		if(usedActivities.indexOf(val) === -1){
			// add
			usedActivities.push(val);
			console.log(val);
			$('#actList').append('<li data-text="'+val+'"><h1><a class=" activityItem green-text night">' + val + '</a></h1></li>');
			$('li[data-text="'+val+'"]').on('click', function(){

				var dataval = $(this).attr('data-text');
				console.log(dataval);

				$parent.css('display', 'block');

				// remove
				usedActivities.splice(usedActivities.indexOf(dataval), 1);

				$(this).remove();

				// // remove
				// usedActivities.splice(usedActivities.indexOf(val), 1);
			});

		} else {
			// // remove
			// usedActivities.splice(usedActivities.indexOf(val), 1);

		}
		console.log(usedActivities);
	});


	$(".activityItem:not(#firstActivity)").click(function() {
		$(this).remove();
	});



	$("#hang_btn").click(function() {
		$("#sentence_page").fadeOut(function() {
			$("#invite_page").fadeIn();
		});
	});

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

		data["categories"] = usedActivities.join(",");

		console.log(data);
		$.post("/sentence", data, function(data) {
			console.log(data);
			if (data) {
				location.href = "/matched";
			}
		});
	}


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