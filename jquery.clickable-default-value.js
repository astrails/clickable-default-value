/*jquery.clickable-default-value.js */
/*
 * jQuery clickable default form values
 * version: 0.0.1
 * @requires: jQuery v1.2 or later
 * Licensed under the MIT license:
 *
 * Copyright 2009 Astrails Ltd
 *	http://astrails.com

 * Usage:
 * jQuery("form.some-form").clickable_default_value([["#name", "what is your name"], ["#email", "what is your email"]]);
 */

(function($){
  $.fn.clickable_default_value = function(opts) {
		var form_selector = this;
		var form = $(this);

		function set_text(el, text) {
			if (!el.val() || "" == el.val()) {
				el.val(text);
			}
		}

		function clear_values() {
			$.each($(form_selector + "[default-clickable]"), function() {
				var el = $(this);
				if (el.val() == el.attr("default-clickable")) {
					el.val("");
				}
			});
		}

		if (opts == "clear") {
			clear_values();
			return;
		}

    return this.each(function() {
			var theform = form;
			$.each(opts, function(i, e) {
				var elem = $(e[0]);
				var text = e[1];
				set_text($(elem), text);

				$(elem).attr("default-clickable", text);

				$(elem).focus(function() {
					if ($(this).val() == text) {
						$(this).val("");
					}
				}).blur(function(){
					set_text($(this), text);
				});
			});

			form.submit(function() {
				clear_values();
				return true;
			});
    });
 };
})(jQuery);