// ==UserScript==
// @name         New Userscript
// @namespace    tampermonkey.com
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        www.mcleodgaming.com/games/ssf2
// @update       https://github.com/gsquaredxc/ssf2/edit/master/anticlose.meta.js
// @download     https://github.com/gsquaredxc/ssf2/edit/master/anticlose.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "\o/";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    });
    // Your code here...
})();
