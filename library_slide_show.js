"use strict";
var createSlideShow = function() {
    //private variables and functions
    var timer, play = true, speed = 2000;
    var nodes = {image: null, caption: null};
    var img = { cache: [], counter:0};

    var stopSlideshow = function () {
        clearInterval(timer);
    };
    var displayNextImage = function() {
        img.counter = ++img.counter % img.cache.length;
        var image = img.cache[img.counter];
        nodes.image.src = image.src;
        nodes.caption.firstChild.nodeValue = image.title;
    };
    var setPlayText = function(btn) {
        btn.value = (play) ? "Resume" : "Pause";
    };

    //public methods that have access to private variables
    return {
        loadImages: function(slides) {
            var image;
            for (var i = 0; i < slides.length; i++) {
                image = new Image();
                image.src = "images/" + slides[i].href;
                image.title = slides[i].title;
                img.cache.push(image);
            }
            return this;
        },
        startSlideShow: function() {
            if (arguments.length === 2) {
                nodes.image = arguments[0];
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, speed);
            return this;
        },
        createToggleHandler: function() {
            var me = this; //store this which is the object literal
            return function() {
                // this is the clicked button; 'me' is the object literal
                if(play) {
                    stopSlideshow();
                } else {
                    me.startSlideShow();
                }
                setPlayText(this);
                play = !play; // toggle play flag
            };

        }
    };
};