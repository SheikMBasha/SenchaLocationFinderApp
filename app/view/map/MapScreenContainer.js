Ext.define("SenchaLocationFinder.view.map.MapScreenContainer", {
    extend: 'Ext.NavigationView',
    xtype: 'mapcontainer',
    config: {
        navigationbar: {
            height: '50',
            align: 'stretch',
            //items: [
            //    {
            //        xtype: 'spacer',
            //        width: '1600'
            //    },
            //{
            //    xtype: 'button',
            //    align: 'right',
            //    iconCls: 'refresh',
            //    iconMask: true,
            //    hidden: false,
            //    action: 'refresh'
            //}
            //]
        },
        items: [
            {
                xtype: 'mapscreen',
                height: 300,
                width: 300
            }
        ]
    }
});