Ext.define('gizmoManager.model.Gizmo', {
    extend: 'Ext.data.Model',
    fields: [
    	{
            name: 'id', 
            type: 'int'
        },
        {	name: 'description',
        	type: 'string'
        }
    ]
});