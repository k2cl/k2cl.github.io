$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});

// $(function() {
//     var header = $(".topo");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//
//         if (scroll >= 250) {
//             header.removeClass('animated').addClass("f-nav animated fadeInDown");
//         } else {
//             header.removeClass("f-nav animated fadeInDown").addClass('animated');
//         }
//     });
// });
//
// $(function() {
//     var agenda = $(".col-agenda");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//
//         if (scroll >= 250) {
//             header.removeClass('slow').addClass("f-nav animated fadeInDown");
//         } else {
//             header.removeClass("f-nav animated fadeInDown").addClass('animated slow fadeInDown');
//         }
//     });
// });

function ValidaForm() {

  if (document.form1.nome.value == ""  ) {

      window.alert("Campos * são Obrigatórios!");

      document.form1.nome.focus();

      return false;

  }

  if (document.form1.email.value == ""  ) {

      window.alert("Campos * são Obrigatórios!");

      document.form1.email.focus();

      return false;

  }

  if (document.form1.fone.value == ""  ) {

      window.alert("Campos * são Obrigatórios!");

      document.form1.fone.focus();

      return false;

  }
}

// Smooth scroll for in page links - http://wibblystuff.blogspot.in/2014/04/in-page-smooth-scroll-using-css3.html
// Improvements from - http://codepen.io/kayhadrin/pen/KbalA

$(function() {
	var $window = $(window), $document = $(document),
		transitionSupported = typeof document.body.style.transitionProperty === "string", // detect CSS transition support
		scrollTime = 1; // scroll time in seconds

	$(document).on("click", "a[href*=#]:not([href=#])", function(e) {
		var target, avail, scroll, deltaScroll;

		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			target = $(this.hash);
			target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

			if (target.length) {
				avail = $document.height() - $window.height();

				if (avail > 0) {
					scroll = target.offset().top;

					if (scroll > avail) {
						scroll = avail;
					}
				} else {
					scroll = 0;
				}

				deltaScroll = $window.scrollTop() - scroll;

				// if we don't have to scroll because we're already at the right scrolling level,
				if (!deltaScroll) {
					return; // do nothing
				}

				e.preventDefault();

				if (transitionSupported) {
					$("html").css({
						"margin-top": deltaScroll + "px",
						"transition": scrollTime + "s ease-in-out"
					}).data("transitioning", scroll);
				} else {
					$("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
					.animate({
						scrollTop: scroll + "px"
					}, scrollTime * 50);

					return;
				}
			}
		}
	});

	if (transitionSupported) {
		$("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
			var $this = $(this),
				scroll = $this.data("transitioning");

			if (e.target === e.currentTarget && scroll) {
				$this.removeAttr("style").removeData("transitioning");

				$("html, body").scrollTop(scroll);
			}
		});
	}
});




(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
