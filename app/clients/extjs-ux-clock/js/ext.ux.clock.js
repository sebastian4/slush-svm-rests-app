/**
*
*   MIT License
*
*   Copyright (c) 2010 Mats Bryntse
*
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*   of this software and associated documentation files (the "Software"), to deal
*   in the Software without restriction, including without limitation the rights
*   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*   copies of the Software, and to permit persons to whom the Software is
*   furnished to do so, subject to the following conditions:
*
*   The above copyright notice and this permission notice shall be included in
*   all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*   THE SOFTWARE.
**/

Ext.ns('Ext.ux');

/**
* @class Ext.ux.Clock
* @extends Ext.BoxComponent
* <p>This class shows the current time as an analogue clock. Note: Requires Raphael!
* </p>
*/
Ext.ux.Clock = Ext.extend(Ext.BoxComponent, {

    /**
     * @cfg {Float} hourOffset An offset in hours added to current time
     */
    hourOffset : 0,

    /**
     * @cfg {string} hourColor The color for the hour hand
     */
    hourColor : '#42B712',
    
    /**
     * @cfg {string} minuteColor The color for the minute hand
     */
    minuteColor : '#C6D92C',

    /**
     * @cfg {string} secondColor The color for the second hand
     */
    secondColor : '#dee',

    /**
     * @cfg {string} clockBgUrl The URL for the clock background images
     */
    clockBgUrl : "images/bg-clock.png",

    /**
     * @cfg {string} label A label to display below the clock
     */
    label : "",

    // Overriding superclass template method
    afterRender : function() {
        this.addClass('ext-ux-clock');

        var size = Math.min(this.getHeight(), this.getWidth());
        
        this.innerEl = this.el.createChild({
            cls : 'ext-ux-clock-inner'
        })

        // Background image of an empty clock
        this.bgImg = this.innerEl.createChild({
            tag : 'img',
            cls : 'ext-ux-clock-img',
            src : this.clockBgUrl,
            width : size,
            height : size
        });
       
        this.labelEl = this.el.createChild({
            cls : 'ext-ux-clock-label',
            html : this.label
        });

        // Initialize a Raphael canvas
        this.canvas = Raphael(this.innerEl.dom, size, size);

        this.on('resize', this.handleResize, this);
	    
        this.drawHands();

        this.timer = setInterval(this.drawHands.createDelegate(this), 1000);
        
        // Call superclass
        Ext.ux.Clock.superclass.afterRender.apply(this, arguments);
    },

    // private
    drawHands : function() {
        var size = Math.min(this.getHeight(), this.getWidth()),
            center = size / 2,
            pathTpl = "M{0} {1}L{0} {2}",
            brushSize = Math.ceil(size / 200),
            date = this.getDate(),
            secs = date.getSeconds(),
            mins = date.getMinutes(),
            hrs = date.getHours();

	    this.canvas.clear();

        // Second indicator
	    this.canvas.path(String.format(pathTpl, center, 1.15*center, 0.25*center)).attr({ 
            stroke: this.secondColor, 
            rotation : [6 * secs, center, center],
            "stroke-width": brushSize
        });
            
        // Minute indicator
	    this.canvas.path(String.format(pathTpl, center, center, 0.35*center)).attr({ 
            stroke: this.minuteColor, 
            rotation : [6 * mins, center, center],
            "stroke-width": brushSize * 2 
        });

        // Hour indicator
	    this.canvas.path(String.format(pathTpl, center, center, 0.5*center)).attr({
            stroke: this.hourColor, 
            rotation : [(30 * hrs + (mins/3)), center, + center],
            "stroke-width": brushSize * 3 
        });
    },

    getDate : function() {
        var d = new Date()
        return d.add(Date.MINUTE, (this.hourOffset * 60));
    },

    setHourOffset : function(offset) {
        this.hourOffset = offset;
        this.drawHands();
    },

    // private
    handleResize : function(me, newWidth, newHeight) {
        var size = Math.min(newWidth, newHeight);
        
        this.bgImg.setSize(size, size, true);
        this.canvas.setSize(size, size);
        this.drawHands();
    },

    // private, clean up 
    onDestroy : function() {
        clearInterval(this.timer);
        this.canvas.clear();

        Ext.destroy(this.bgImg, this.labelEl, this.innerEl);
        
        // Call superclass
        Ext.ux.Clock.superclass.onDestroy.apply(this, arguments);
    }
});

// Register the xtype for lazy rendering support
Ext.reg('ux.clock', Ext.ux.Clock);