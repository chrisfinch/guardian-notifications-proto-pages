function updateUnread () {
	$(".js-notifications-link span").text($(".nav-notifications__list .notification-unread").length);
}

$(function () {
	
	updateUnread();

	$(".js-notifications-link").on("click", function (e) {
		event.preventDefault();
		$(".nav-notifications__menu").toggle();
		$(".profile-group").toggleClass("active");
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


});