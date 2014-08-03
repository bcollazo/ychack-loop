

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
		var data = {};

		var hour = parseInt($("#start").data("hour"));
		var d = new Date();
		d = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, 0, 0, 0)
		data["start"] = d;

		var duration = parseInt($("#duration").data("duration"));
		data["duration"] = duration;

		// activites/categories
		var my_act = usedActivities.join(",");

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