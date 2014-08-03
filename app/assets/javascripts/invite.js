$(document).ready(function() {
	$(".user-row").click(function() {
		$(this).addClass("active");
	});

	$("#invite_all_btn").click(function() {
		location.href = "/matched";
	});

	$("#invite_some_btn").click(function() {
		location.href = "/matched";
	});


});