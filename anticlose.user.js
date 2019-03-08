// ==UserScript==
// @name         New Userscript
// @namespace    tampermonkey.com
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        www.mcleodgaming.com/games/ssf2
// @update       https://raw.githubusercontent.com/gsquaredxc/ssf2/master/anticlose.meta.js
// @download     https://raw.githubusercontent.com/gsquaredxc/ssf2/master/anticlose.meta.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "\o/";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    });
    document.title = "Google"
    // Your code here...
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://www.google.com/s2/favicons?domain_url=google.com';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
