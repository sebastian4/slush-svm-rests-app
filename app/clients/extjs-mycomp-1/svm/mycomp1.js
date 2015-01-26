
Ext.define('svm.mycomp1', {
	extend : 'Ext.Window',
	minimizable : true,
	maximizable : true,
	title : 'Welcome!',
	initComponent : function() {
		console.log("mycomp1 initComponent");
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
	},
    onRender: function() {
    	console.log("mycomp1 onRender");
    }
});
