var main = function() {
	$('#wiggle img').hover(function(){
    	$(this).wiggle('start');
			},function(){
    	$(this).wiggle('stop');
	});
};

$(document).ready(main);