Ext.onReady(function() {

	console.log("mycomp1 init");

	Ext.define('Svm.MyComp1', {
		extend : 'Ext.Window',
		minimizable : true,
		maximizable : true,
		title : 'Welcome!',
		initComponent : function() {
			this.items = [
				{
					xtype : 'textfield',
					name : 'tfName',
					fieldLabel : 'Enter your name'
				}
			], this.callParent(arguments);
		}
	});

});