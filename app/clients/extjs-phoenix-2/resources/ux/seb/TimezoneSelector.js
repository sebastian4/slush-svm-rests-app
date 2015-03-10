Ext.define('Ext.ux.seb.TimezoneSelector', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.timezoneselector',

    requires: [
    ],

    bodyCls: 'body-panel-gray',

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

            fieldLabel: 'a display label',
            displayField: 'name',
            valueField: 'val',
            store: timezoneStore,
            queryMode: 'local',
            typeAhead: true,

            listeners: {
                select: function (combo, records) {
                    console.debug("something selected");
                    console.debug(self.timezoneCombobox.getValue());
                }
            }
        });

        Ext.apply(this, {
            items: [
                this.timezoneCombobox
            ]
        });

        this.callParent();
    },

    getValue: function () {
        return this.timezoneCombobox.getValue();
    }

});