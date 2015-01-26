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
        var img1 = this.items.items[1];
        console.log(this);
        console.log(img1);
        this.callParent(arguments);
        this.getEl().on('click', this.onClick, this);

        //img1.el.on('click', function() { console.log("clicky"); }, this);
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
