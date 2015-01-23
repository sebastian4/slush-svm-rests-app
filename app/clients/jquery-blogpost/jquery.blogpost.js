(function($){
    "use strict";

    // Global Public Variables
    var MAX_HEIGHT = 100;
    $.blogPost = function(el, options){
        // Global Private Variables
        var MAX_WIDTH = 200;

        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("blogPost", base);

        base.init = function(){
            var totalButtons = 2;

            base.options = $.extend({},$.blogPost.defaultOptions, options);

            base.$el.append('<button name="public" style="'+base.options.buttonStyle+'">Private</button>');
            base.$el.append('<button name="private" style="'+base.options.buttonStyle+'">Public</button>');
            // Put your initialization code here
        };

        base.clicker = function(e) {
            debug(e);

            base.options.buttonPress.call( this);
        }

        base.logg = function(e) {
            console.log(e);
        }

        base.init();

        function debug(e) {
            console.debug(e);
        }

    };

    $.blogPost.defaultOptions = {
        buttonStyle: "border: 1px solid #fff; background-color:#000; color:#fff; padding:20px 50px",
        buttonPress: function () {}
    };

    $.fn.blogPost = function(options){
        return this.each(function(){
            var bp = new $.blogPost(this, options);


            $('button[name="public"]').click(function(e) {
                bp.clicker(e);
            });
            $('button[name="private"]').click(function(e) {
                bp.logg(e);
            });
        });
    };

})(jQuery);
