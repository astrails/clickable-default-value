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

			function set_text(el, text) {
				if (!el.val() || "" == el.val()) {
					el.val(text);
				}
			}

    return this.each(function() {
			var form = $(this);

			$.each(opts, function(i, e) {
				var elem = $(e[0]);
				var text = e[1];
				set_text($(elem), text);
				$(elem).focus(function() {
					if ($(this).val() == text) {
						$(this).val("");
					}
				}).blur(function(){
					set_text($(this), text);
				});
			});

			form.submit(function() {
				$.each(opts, function(i, e) {
					var el = $(e[0]);
					if ($(e[0]).val() == e[1]) {
						el.val("");
					}
				});
				return true;
			});
    });
 };
})(jQuery);