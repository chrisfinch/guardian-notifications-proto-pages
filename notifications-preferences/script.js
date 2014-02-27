function updateUnread () {
	$(".js-notifications-link span").text($(".nav-notifications__menu .notification-unread").length);
}

$(function () {
	
	updateUnread();

	$(".js-notifications-link").on("click", function (e) {
		event.preventDefault();
		$(".nav-notifications__menu").toggle();
		$(".nav-notifications").toggleClass("active");

		$(".nav-profile-menu").hide();
		$(".nav-profile").removeClass("active");
	});

	$(".js-profile-link").on("click", function (e) {
		event.preventDefault();
		$(".nav-profile-menu").toggle();
		$(".nav-profile").toggleClass("active");

		$(".nav-notifications__menu").hide();
		$(".nav-notifications").removeClass("active");
	});

	$(".js-mark-all-read").on("click", function (e) {
		event.preventDefault();
		$(".nav-notifications__list .notification-unread").removeClass("notification-unread");
		updateUnread();
	});	

	$(".nav-notifications__list .notification-unread").each(function (i, e) {
		var $el = $(e);
		$el.find(".js-mark-read").on("click", function (e) {
			event.preventDefault();
			$el.removeClass("notification-unread");
			updateUnread();
			// API call mark as read
		});
	});

	var frequencyLabels = ["Never", "Monthly", "Weekly", "Daily", "Instant"];

	$(".js-frequency-field").each(function (i, e) {
		var $el = $(e);
		var $indicator = $el.find(".js-frequency-indicator");
		var $input = $el.find(".js-frequency-input");
		
		$input.on("change", function () {
			$indicator.html(frequencyLabels[this.value]);
		});

		if ($el.hasClass("js-frequency-field--control")) {
			$input.on("change", function () {
				var val = this.value;
				$(".js-frequency-field").filter(function () {
					return !$(this).hasClass(".js-frequency-field--control");
				}).each(function () {
					$(this).find(".js-frequency-indicator").html(frequencyLabels[val]);
					$(this).find(".js-frequency-input").val(val);
				});
			});			
		}

	});

	// var formSectionToggle = function (event) {
	// 	event.preventDefault();

	// 	var $pane = $($(this).data("for"));

	// 	if ($pane.data("open")) {
	// 		$pane.slideUp().data("open", false);
	// 		$(this).removeClass("open");
	// 	} else {
	// 		$pane.slideDown().data("open", true);
	// 		$(this).addClass("open");
	// 	}

	// };

	// $(".form__heading").each(function (i, e) {
	// 	var $el = $(e);
	// 	$el.on("click", formSectionToggle);
	// });

});