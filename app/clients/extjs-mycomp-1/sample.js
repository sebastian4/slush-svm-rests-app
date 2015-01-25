Ext.onReady(function() {

	console.log("sample init");

	var winMyComp1 = Ext.create('svm.mycomp1');
	winMyComp1.show();

	var panel2 = Ext.create('Ext.panel.Panel', {
		title : 'Panel - 2',
		html : 'Child - 2',
		width : 200
	});

	Ext.create('Ext.container.Viewport', {
		items : [ 
			panel2,
			{
				xtype : 'svm.mycomp2'
			}
		]
	});

});