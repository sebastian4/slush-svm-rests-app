Ext.define('Ext.ux.seb.TimezoneSelector', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.timezoneselector',

    requires: [
    ],

    bodyCls: 'body-panel-gray',

    fieldLabel: 'default label',

    funky: function(combo, records) {
        console.log("funky selected "+this.getValue());
    },

    initComponent: function () {

        console.debug("timezone selector initComponent");
        self = this;

        var timezonedata = [
            { name: "uno" , val: 1 },
            { name: "dos" , val: 2 },
            { name: "tres", val: 3 },
            { name: "cuatro", val: 4 },
        ];

        var timezoneStore = Ext.create('Ext.data.Store', {
            storeId: 'timeZoneStore',
            fields: ['name','val'],
            data: timezonedata,
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json'
                }
            }
        });

        this.timezoneCombobox = Ext.create('Ext.form.field.ComboBox', {
            name: 'browserTimeZoneId',
            xid: 'timeZoneComboBox',

            width: 450,
            labelWidth: 150,

            fieldLabel: this.fieldLabel,
            displayField: 'name',
            valueField: 'val',
            store: timezoneStore,
            queryMode: 'local',
            typeAhead: true,

            listeners: {
                select: this.funky
            }
        });

        Ext.apply(this, {
            items: [
                {
                    html: "<a class='link1' href='#'>link 1</a>&nbsp;&nbsp;"
                            +"<a class='link2' href='#'>link 2</a>",
                    xtype: "panel"
                },
                this.timezoneCombobox
            ]
        });


        this.callParent();
    },

    // init: function() {

    //     console.debug("timezone selector init");

    //     this.control({
    //         ".link1": {
    //             click: self.funky
    //         }
    //     });
    // },

    getValue: function () {
        return this.timezoneCombobox.getValue();
    }

});