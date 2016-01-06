/**
 * @license
 * Copyright (c) 2015 MediaMath Inc. All rights reserved.
 * This code may only be used under the BSD style license found at http://mediamath.github.io/strand/LICENSE.txt

*/
(function (scope) {

	scope.Sync = Polymer({
		is:"mm-sync",
		behaviors:[
			StrandTraits.Syncable,
			StrandTraits.Refable
		],
	});

})(window.Strand = window.Strand || {});
