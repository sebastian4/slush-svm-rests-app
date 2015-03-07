Ext.define("Phoenix.view.Some12Panel", {
	extend: "Ext.panel.Panel",
    alias: "widget.some-12-panel",
    bodyPadding: 5,  // Don't want content to crunch against the borders
    title: 'some 12 panel',
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Start date'
    }, {
        xtype: 'datefield',
        fieldLabel: 'End date'
    }]
});