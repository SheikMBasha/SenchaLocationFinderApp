Ext.define("SenchaLocationFinder.view.home.HomeListContainer", {
    extend: 'Ext.NavigationView',
    xtype: 'homelistcontainer',
    requires: ['SenchaLocationFinder.view.home.HomeList', 'SenchaLocationFinder.store.Tasks'],
    //initialize: function () {
    //    alert('Initialize homelist Container!!');

    //    //Create the instance of the store and load it
    //    var userStore = Ext.create('SenchaLocationFinder.store.Tasks');
    //    userStore.load();

    //    //var cutsomStore = Ext.getStore('tasksStore');
    //    //cutsomStore.load();
    //    alert('Store Loaded!!');
    //},
    config: {
        navigationBar: {
                height: '50',
                align: 'stretch',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'action',
                        iconMask: true,
                        action: 'logout'
                    }
            ]
        },
        items: [
            {
                title: 'Task List',
                xtype: 'homelist',
            }
        ]
    }
});
