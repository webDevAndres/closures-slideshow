"use strict";
var $ = function(id) { return document.getElementById(id);};

window.onload = function() {
    // create the slideshow object
    var slideshow = createSlideShow();

    var slides = [
        {href: "gear.jpg", title:"Fishing gear"},
        {href: "plane.jpg", title:"Bush plane"},
        {href: "release.jpg", title:"Catch and Release"},
        {href: "lunch.jpg ", title:"Streamside Lunch"},
        {href: "dusk.jpg", title:"Day's End"}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));

    $("play_pause").onclick = slideshow.createToggleHandler();
}