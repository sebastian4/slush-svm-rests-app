Ext.define("Phoenix.view.Some11Panel", {
	extend: "Ext.panel.Panel",
	alias: "widget.some-11-panel",
	requires: [
		'Ext.ux.seb.TimezoneSelector'
    ],

    title: 'some 11 panel',
    width: 200,

    initComponent: function () {

    	console.debug("some11panel initComponent");

    	Ext.apply(this, {
            items: [
            	{
			        xtype: 'label',
			        text: 'My Awesome Field',
			        margin: '0 0 0 10'
			    },
            	{
					xtype: 'timezoneselector'
				}
            ]
        });

    	this.callParent();
    }

    // html: '<p>World!</p>'

});