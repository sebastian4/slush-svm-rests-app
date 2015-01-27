Ext.define('Ext.ux.TwoImages', {
    extend: 'Ext.Panel', // subclass Ext.Component
    alias: 'widget.twoimages', // this component will have an xtype of 'managedimage'

    // autoEl: {
    //     tag: 'img',
    //     src: Ext.BLANK_IMAGE_URL,
    //     cls: 'two-images'
    // },

    cls: 'two-images',

    img1Index: 2,

    items: [
        {
            xtype: 'datefield',
            fieldLabel: 'Start date'
        }, 
        {
            xtype: 'component',
            cls: 'image1',
            autoEl: {
                tag: 'img',
                src: 'http://images.clipartpanda.com/clipart-smiley-face-smiley_face_13.png'
            },
            listeners : {
                el: {
                    click : function(){
                        console.log("image1 clicked ");
                        //console.log(this.parent().el);
                        var nam = Ext.getCmp('aaa');
                        console.log(this);
                        console.log(this.aaa);
                        console.log(nam);
                    },
                    scope: this
                }
            }
        },
        {
            xtype: 'component',
            cls: 'image2',
            autoEl: {
                tag: 'img',
                src: 'http://images.clipartpanda.com/clipart-smiley-face-smiley_face_13.png'
            }
        }
    ],

    onAaa: function() {
        console.log("aaa");
    },

    onRender: function() {
        console.log("twoimages onRender");
        var me = this;
        //this.autoEl = Ext.apply({}, this.initialConfig, this.autoEl);
        var img1 = this.items.items[1];
        var img2 = this.query('component')[1];
        var comp1 = this.down('component');

        this.aaa = 0;

        console.log(this);
        console.log(img1);
        console.log(img2);
        this.callParent(arguments);

        //this.getEl().on('click', this.onClick, this);
        
        //me.down('textfield[name=first]').on('change',me.onFirstnameChange,me);

        comp1.on('change', function() { console.log("chani"); } , me);

        //comp1.on('click', function() { console.log("clicky"); } , me);
        //img2.on('click', function() { console.log("clicky img2"); } , img2);

    },

    // onClick: function() {
    //     this.fireEvent('click', this);
    // },

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
