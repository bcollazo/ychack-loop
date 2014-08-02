var main = function() {
	$("#live").mousehover(function () {
		$(this).toggleClass("activate");
	});
};

$(document).ready(main);