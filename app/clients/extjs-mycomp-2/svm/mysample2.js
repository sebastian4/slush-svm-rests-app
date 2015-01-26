Ext.define('svm.mysample2', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.svm.mysample2',
    title : 'Sample Form',
    width : 400,
    // layout: 'fit',
    // autoShow: true,

    initComponent: function() {
        console.log("mysample2 initComponent");

        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'login',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'password',
                        fieldLabel: 'password'
                    },
                    {
                        html: "<p>some paraf</p>",
                        xtype: "panel"
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Login'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        console.log(this.items);

        this.callParent(arguments);
    }
    
});
