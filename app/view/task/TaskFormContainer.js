Ext.define("SenchaLocationFinder.view.task.TaskFormContainer", {
    extend: 'Ext.Panel',
    xtype: 'taskformcontainer',
    config: {
        latitude: '',
        longitude: null,
        items: [
            {
                xtype: 'toolbar',
                title: 'Add TAsk',
                height: '50',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'back',
                        ui: 'back',
                        id: 'taskbackbutton',
                        action: 'TaskFormBack'
                    },
                    {
                        xtype: 'button',
                        text: 'Map',
                        ui: 'action',
                        align: 'right',
                        id: 'showmapbutton',
                        action: 'ShowMap'
                    }
                ]
            },
            {
                xtype: 'taskformpanel'
                

            }
        ]
       
    }


});