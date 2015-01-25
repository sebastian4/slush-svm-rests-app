Ext.onReady(function() {

	console.log("mycomp1 init");

	Ext.define('svm.mycomp1', {
		extend : 'Ext.Window',
		minimizable : true,
		maximizable : true,
		title : 'Welcome!',
		initComponent : function() {
			this.items = [
				{
					xtype : 'textfield',
					name : 'fName',
					fieldLabel : 'first name'
				},
				{
					xtype : 'textfield',
					name : 'lName',
					fieldLabel : 'last name'
				}
			], this.callParent(arguments);
		}
	});

});