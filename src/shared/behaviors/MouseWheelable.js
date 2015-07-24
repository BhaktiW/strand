/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function (scope) {
	// see: https://developer.mozilla.org/en-US/docs/Web/Events/wheel#Listening_to_this_event_across_browser
	var support = "onwheel" in document.createElement("div") ? "wheel" : 
		document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll";

	scope.MouseWheelable = {

		attached: function() {
			this.addEventListener(support, this._onWheel);
		},

		detached: function() {
			this.removeEventListener(support, this._onWheel);
		},

		_onWheel: function(e) {
			// override this abstract method
		},

	 };

})(window.StrandTraits = window.StrandTraits || {}); 