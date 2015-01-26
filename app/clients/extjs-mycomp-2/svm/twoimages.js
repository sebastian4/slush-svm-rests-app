Ext.define('Ext.ux.TwoImages', {
    extend: 'Ext.Panel', // subclass Ext.Component
    alias: 'widget.twoimages', // this component will have an xtype of 'managedimage'

    // autoEl: {
    //     tag: 'img',
    //     src: Ext.BLANK_IMAGE_URL,
    //     cls: 'two-images'
    // },

    cls: 'two-images',

    items: [
        {
            xtype: 'datefield',
            fieldLabel: 'Start date'
        }, 
        {
            xtype: 'component',
            autoEl: {
                tag: 'img',
                src: 'http://images.clipartpanda.com/clipart-smiley-face-smiley_face_13.png'
            }
        },
        {
            xtype: 'component',
            autoEl: {
                tag: 'img',
                src: 'http://images.clipartpanda.com/clipart-smiley-face-smiley_face_13.png'
            }
        }
    ],

    onRender: function() {
        console.log("twoimages onRender");
        //this.autoEl = Ext.apply({}, this.initialConfig, this.autoEl);
        console.log(this.items.items[1]);
        this.callParent(arguments);
        this.el.on('load', this.onLoad, this);
        this.el.on('click', this.onClick, this);
    },

    onLoad: function() {
        this.fireEvent('load', this);
    },

    onClick: function() {
        this.fireEvent('click', this);
    },

    setSrc: function(src) {
        // if (this.rendered) {
        //     this.el.dom.src = src;
        // } else {
        //     this.src = src;
        // }
    },

    getSrc: function(src) {
        return 0;
        // return this.el.dom.src || this.src;
    }
});
