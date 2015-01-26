
Ext.define('svm.mycomp3', {
	extend : 'Ext.panel.Panel',
	alias: 'widget.svm.mycomp3',
	title: 'my comp 3',
	width: 200,
	items: [{
	        xtype: 'datefield',
	        fieldLabel: 'Start date'
	    }, {
	        xtype: 'datefield',
	        fieldLabel: 'End date'
	    }
	],
	initComponent: function () {
		console.log("mycomp3 initComponent");
		
        //parent
        this.callParent(arguments);
    }
});
