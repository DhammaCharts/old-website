(function($) {
	$(function() {
		$(window).on('load resize', function() {
			sticky();
		});

		function sticky() {
			var w = $(window).width();

			if (w < 750) {
				$('.project article').trigger('sticky_kit:detach');
			} else {
				$('.project article').stick_in_parent({
					offset_top: $('.header').outerHeight()
				});
			}
		}
	});

	var sr = ScrollReveal({
		origin   : "bottom",
		distance : "64px",
		duration : 900,
		delay    : 0,
		scale    : 1
	});

	// sr.reveal('.project li');
	sr.reveal('.project img');

	// const article = $("article");
	// const height = article.height();
	// $(".container").css("min-height", height);
}(jQuery));

// debugs the problem when height of article is too long (longer than image)

// const article = document.getElementByTagName("article");
// const height = article.offsetHeight;
//
// document.getElementById(".container").style.minHeight = height;
