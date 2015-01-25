Ext.onReady(function() {

	console.log("mycomp2 init");

	Ext.define('svm.mycomp2', {
		extend : 'Ext.draw.Component',
		alias: 'widget.svm.mycomp2',
		html: '<p>my html comp 2</p>',
		width: 200,

		initComponent: function () {

			console.log("mycomp2 initComponent");
			
	        //parent
	        this.callParent(arguments);
	    }
	});

});