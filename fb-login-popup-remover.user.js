// ==UserScript==
// @name         FB Login Popup Remover
// @namespace    https://github.com/xironeheate/fb-login-popup-remover
// @version      1.0
// @description  remove facebook login popup
// @author       XironeHeate
// @match        https://*.facebook.com/*
// ==/UserScript==

(function() {
    document.getElementsByClassName("_5hn6")[0].remove();
    document.getElementById("u_jsonp_2_3").remove();
    document.getElementById("u_jsonp_2_15").remove();
    document.getElementById("pagelet_growth_expanding_cta").remove();
})();
