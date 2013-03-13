// ==UserScript==
// @name       Trello card colorizer
// @namespace  http://github.com/grimradical/trello-colorize
// @version    0.2
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @description  Changes background color of Trello cards to match labels
// @match      https://trello.com/board/*
// @copyright  2012+, Deepak Giridharagopal
// ==/UserScript==

var colorize = function() {
    $(".list-card").css("background-color", "").css("border", "");
    // Blocked
    $(".list-card:has(.purple-label)").css("background-color", "#cc99ff");
    // Slurm
    $(".list-card:has(.green-label)").css("background-color", "#99cc66");
    // Community-related
    $(".list-card:has(.yellow-label)").css("background-color", "#ffff99");
    // ???
    $(".list-card:has(.orange-label)").css("background-color", "#ff9966");
    // Bug
    $(".list-card:has(.red-label)").css("background-color", "#ff9999");
    // Feature
    $(".list-card:has(.blue-label)").css("background-color", "#99ccff");
    // Special visual marker for blocked cards
    $(".list-card:has(.purple-label)").css("border", "7px solid purple");
};
$(document).ready(function() {
  setInterval(colorize, 10000);
});
