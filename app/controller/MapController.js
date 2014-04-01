Ext.define('SenchaLocationFinder.controller.MapController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myMap: '#geomap',
            mapback: 'mapscreen button[action = MapBack]',
            backOptn: 'mapscreen',
            latlongfield: '#latlan'
        },
        control: {
            mapback: {
                tap: 'onMapBack'
            }
        }
    },
    onMapBack: function () {
        this.getMyMap().destroy();


        //Read the config property - readonly from mapwidget screen and decide where to navigate
        if (this.getBackOptn().getReadOnly()) {
            Ext.Viewport.setActiveItem({
                xtype: 'homelistcontainer'
            });
        }
        else {
            Ext.Viewport.setActiveItem({
                xtype: 'taskformcontainer'
                
            });
        }

       
    }
});