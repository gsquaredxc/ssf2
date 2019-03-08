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
    window.onbeforeunload = function(){
        return "Don't leave me!";
    };
    // Your code here...
})();