Ext.define("SenchaLocationFinder.view.home.HomeList", {
    extend: 'Ext.dataview.List',
    requires: ['SenchaLocationFinder.store.Tasks'],
    xtype: 'homelist',
    initialize: function () {
        this.callParent();
        var userStore = Ext.create('SenchaLocationFinder.store.Tasks');
        //userStore.getProxy().setUrl('http://localhost/LocatorService/LocationFinder.svc/tasks?id=' + SenchaLocationFinder.app.loggedInUser);
        userStore.getProxy().setUrl('http://locationtrackerservice.somee.com/LocationTrackerService/RestServiceImpl.svc/tasks?id=' + SenchaLocationFinder.app.loggedInUser);
        userStore.load();
        this.setStore(userStore);
    },
    config: {
        onItemDisclosure: true,
        emptyText: 'No Data Found!',
        store: 'Tasks',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: '30',
                style: 'background: darkgray',
                items: [
                    {
                        xtype: 'searchfield',
                        placeHolder: ' Search Taks!!',
                        width: '20%'
                    },
                    //{
                    //    xtype: 'button',
                    //    iconCls: 'search',
                    //    iconMask: true,
                    //    ui: 'confirm'
                    //},
                    //{
                    //    xtype: 'spacer',
                    //    width: '1400'
                    //},
                    {
                        xtype: 'button',
                        text: 'User',
                        iconCls: 'add',
                        action: 'addUser'
                    },
                    {
                        xtype: 'button',
                        text: 'Task',
                        iconCls: 'add',
                        action: 'addTask'
                    }
                ]
            }
        ],
      
        itemTpl: [
            '<p>{TaskName}</p>',
            '<div style="font-size: 0.75em; color: darkgray">{Description}</div>'
        ].join('')
    }
});