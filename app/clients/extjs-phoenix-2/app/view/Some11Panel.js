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

    	var timezoneSelector = Ext.create('Ext.ux.seb.TimezoneSelector', {
    		fieldLabel: 'my own label',
            width: '40%',
    		funky: function() {
    			console.log("my funcky selected "+this.getValue());
    		}
    	});

    	var myButton = Ext.create('Ext.Button', {
		    text    : 'Dynamic Handler Button',
		    handler : function() {
		    	console.debug("value "+timezoneSelector.getValue());
                console.debug("rawValue "+timezoneSelector.getRawValue());
		    }
		});

    	Ext.apply(this, {
            items: [
    			// {
				// 	xtype: 'timezoneselector'
				// },
				timezoneSelector,
				myButton,
				{
			        xtype: 'label',
			        text: 'My Awesome Field',
			        margin: '0 0 0 10'
			    }
            ]
        });

    	this.callParent();
    }

    // html: '<p>World!</p>'

});