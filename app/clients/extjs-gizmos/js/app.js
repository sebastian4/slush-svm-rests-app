Ext.Loader.setConfig({
//    disableCaching : false //Uncomment this line out when you need to reload your Extjs js files
	enabled: true
});

Ext.Loader.setPath('gizmoManager', 'js/app');

Ext.require('Ext.app.Application');

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'gizmoManager',
        appFolder: 'js/app',
        controllers: ['GizmoController'],
        launch: function() {
            Ext.create('gizmoManager.view.MainViewport');
        }
    });
});
