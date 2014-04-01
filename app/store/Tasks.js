Ext.define("SenchaLocationFinder.store.Tasks", {
    extend: 'Ext.data.Store',
    storeId: 'tasksStore',
    requires: ['SenchaLocationFinder.model.Task', 'Ext.data.proxy.Ajax'],
    config: {
        model: 'SenchaLocationFinder.model.Task',
        autoLoad: false,

        proxy: {
            type: 'ajax',
            //url: 'TasksHandler.ashx',
            //url: 'http://10.0.2.2/LocationFinder/LocationFinder.svc/tasks',
            //url: 'http://localhost/LocatorService/LocationFinder.svc/tasks?id=' + SenchaLocationFinder.app.loggedInUser,
            method: 'GET',
            reader: {
                type: 'json',
                //rootProperty: 'guests'
            }
        }
    },
    listeners: {
        beforeload: function () {
            alert('Before load store!!!');
        },
        load: function (store) {
            alert('load store!!!');
        }
    }
});