Ext.onReady(function() {

	console.log("main init");

	var formPanel1 = Ext.create('Ext.form.Panel', {
		title : 'Form',
		width : 300,
		height : 200,
		renderTo : document.body,
		bodyPadding : 25,
		defaultType : 'textfield',
		items : [{
					fieldLabel : 'First Name',
					name : 'firstName'
				}, {
					fieldLabel : 'Last Name',
					name : 'lastName'
				}, {
					xtype : 'datefield',
					fieldLabel : 'DOB',
					name : 'birthdate'
				}]
	});

	var formPanel2 = Ext.create('Ext.form.Panel', {
		renderTo : Ext.getBody(),
		width : 600,
		height : 100,
		title : 'User Form With HBOX',
		defaults : {
			xtype : 'textfield',
			padding : 15,
			labelAlign : 'top'
		},
		layout : {
			type : 'hbox'
		},
		items : [{
					fieldLabel : 'First Name',
					name : 'firstName'
				}, {
					fieldLabel : 'Last Name',
					name : 'lastName'
				}, {
					xtype : 'datefield',
					fieldLabel : 'DOB',
					name : 'birthdate'
				}]
	});

	var panel1 = Ext.create('Ext.panel.Panel', {
		title : 'Panel - 1',
		html : 'Child - 1',
		width : 200
	});
	var panel2 = Ext.create('Ext.panel.Panel', {
		title : 'Panel - 2',
		html : 'Child - 2',
		width : 200
	});

	var win = Ext.create('MyApp.MyWindow');
	win.show();

	// Ext.Msg.show({
	// 	title : 'Save Changes',
	// 	msg : 'Do you want to save the changes?',
	// 	icon : Ext.Msg.QUESTION,
	// 	buttons : Ext.Msg.YESNOCANCEL
	// });

	Ext.create('Ext.container.Viewport', {
		items : [formPanel1, formPanel2, panel1, panel2]
	});

});