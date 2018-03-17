$('#toggle-btn-action').click(
  function() {
    $("#main-nav-container").slideToggle("slow");
  }
);

$(document).ready(function(){
	$('#main-nav-container div a[href^="#"], #logo-main').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 135
	    }, 2000, 'swing');
	});

});
