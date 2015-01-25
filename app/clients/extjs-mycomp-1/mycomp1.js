Ext.onReady(function() {

	console.log("mycomp1 init");

	Ext.define('MyApp.MyWindow', {
		extend : 'Ext.Window',
		minimizable : true,
		maximizable : true,
		x: 700,
		y: 20,
		title : 'Welcome!',
		initComponent : function() {
			this.items = [{
						xtype : 'textfield',
						name : 'tfName',
						fieldLabel : 'Enter your name'
					}], this.callParent(arguments);
		}
	});

});