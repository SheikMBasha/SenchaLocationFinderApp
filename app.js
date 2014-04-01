Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});
Ext.application({
    name: 'SenchaLocationFinder',
    loggedInUser: '',
    latitude: '',
    longitude: '',
    models: ['Task', 'User'],
    stores: ['Users'],
    views: ['map.MapScreen','map.MapScreenContainer', 'LoginScreen', 'home.HomeListContainer', 'home.HomeList', 'task.TaskForm', 'task.TaskFormContainer', 'map.MapWidget'],
    controllers: ['TaskController', 'LoginController', 'HomeController', 'MapController'],
    launch: function () {
        Ext.Ajax.setDisableCaching(false);
        var viewportPanel = Ext.create('Ext.Panel', {
            layout: 'fit',
            items: [
                {
                    xtype: 'loginscreen'
                }
            ]
        });
        Ext.Viewport.add(viewportPanel);
        //Second Option
        //Ext.Viewport.add({
        //    xtype: 'taskscreen'
        //});
    }
});


//Ext.Loader.setConfig({ enabled: true });
//Ext.application({
//    name: 'SenchaLocationFinder',
//    controller: ['TaskController'],
//    autoCreateViewport: true,
//    launch: function () {
//        //Console.log('app: launch');
//        Ext.create("SenchaLocationFinder.view.Main")
//        //Ext.Viewport.add(Ext.create('SenchaLocationFinder.view.Main'));
//        //Ext.create('Ext.contrainer.Viewport', {
//        //    layout: 'card',
//        //    items: [
//        //        {
//        //            xtype: 'tasksscreen'
//        //        }
//        //    ]
//        //});
//    }
//});