Ext.define("SenchaLocationFinder.store.Users", {
    extend: 'Ext.data.Store',
    storeId: 'tasksStore',
    requires: ['SenchaLocationFinder.model.User', 'Ext.data.proxy.Ajax'],
    config: {
        model: 'SenchaLocationFinder.model.User',
        autoLoad: true,

        proxy: {
            type: 'ajax',
            //url: 'TasksHandler.ashx',
            //url: 'http://10.0.2.2/LocationFinder/LocationFinder.svc/tasks',
            //url: 'http://localhost/LocatorService/LocationFinder.svc/tasks?id=' + SenchaLocationFinder.app.loggedInUser,
            url: 'http://locationtrackerservice.somee.com/LocationTrackerService/RestServiceImpl.svc/users',
            method: 'GET',
            reader: {
                type: 'json',
                //rootProperty: 'guests'
            }
        }
    }
});