// ==UserScript==
// @name         New Userscript
// @namespace    tampermonkey.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        www.mcleodgaming.com/games/ssf2
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
