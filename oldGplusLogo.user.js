// ==UserScript==
// @match https://plus.google.com/*
// @name           Google plus old Icon
// @description    Redirects to "basic version" of Google Images. Based on Google Images direct links by Dwoo
// ==/UserScript==
window.setTimeout((function() {
	if (!window.supperGooglePlusLogo) {
 		 window.supperGooglePlusLogo = true;
		var link = document.createElement("link");
		link.type = "image/x-icon";
		link.rel = 'icon';
		link.href = 'data:image/png;base64,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';
		document.getElementsByTagName("head")[0].appendChild(link);
    }
})(), 20);

