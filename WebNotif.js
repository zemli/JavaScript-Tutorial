// ==UserScript==
// @name         script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.services.citizenship.gov.on.ca/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
//For Tampermonkey

(function() {
    'use strict';

    // Your code here...
    var checkKW = function() {

        //var content = $(".panel-body").children().html();
        //var containsV = $('.panel-body:contains("e-Filing Portal is receiving a high volume")');
        //find text "Check for Errors" from all tags
        var keyword = $('*:contains("Check for Errors")');
        if(typeof keyword.html() !== "undefined") {
            beep();
            //alert(keyword.html());
        }
    };
    
    function beep() {
        var tone = new Audio("http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3");
        tone.play();
    }
    
    var extendTime = function() {
        if($("#btExtSession").length) {
            $("#btExtSession").click();
        }
    };


    $(document).ready(function() {
        checkKW();
        //var myVar = setInterval( extendTime() , 120000);
    });

    
})();