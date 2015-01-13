Ext.define('gizmoManager.store.Gizmo', {
    extend: 'Ext.data.Store',
    model: 'gizmoManager.model.Gizmo',
    proxy: {
        type: 'rest',
        url : '/gizmos',
        reader:{
            type: 'json',
            root: 'gizmos'
        }
    }
});