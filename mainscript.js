$( document.body ).on( 'click', '.btn-input li', function( event ) {
 
   var $target = $( event.currentTarget );
 
   $target.closest( 'li' )
      .find( '[data-bind="label"]' ).text( $target.text() )
         .end()
      .children( '.dropdown-toggle' ).dropdown( 'toggle' );
 
   return false;
 
});

var main = function() {
	$(".btn-input .dropdown-menu li a").hover(function {
		$(this).toggleClass("hover-select");
	});

	$(".modal a").click(function() {
		console.log("adfs");
		var post = $(this).val();
		var new_line = $("<li>").text(post);
		new_line.prependTo(".list-unstyled");
	)};

	$(".nav.navbar-nav > li").hover(function {
		$(this).toggle("active");
	});
};

$(document).ready(main);