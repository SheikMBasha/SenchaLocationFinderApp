Ext.define("SenchaLocationFinder.view.map.MapWidget", {
    extend: 'Ext.Map',
    id: 'geomap',
    xtype: 'mapwidget',
    config: {
        useCurrentLocation: true,
        readOnly: false,
        autoDestroy: true,
        currentlatitude: '',
        currentlongitude: '',
        mapDescription: null,
        listeners: {
            maprender: function (self, cmpmap) {
                //alert('Inside Map Render!!');
                var localMap = Ext.getCmp('geomap').getMap();
                var marker = null;
                //var marker = new google.maps.Marker({
                //    map: localMap,
                //    animation: google.maps.Animation.DROP,
                //    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                //    position: new google.maps.LatLng(12.82787, 80.219722),
                //    title: "Hello World!"
                //});
                if (this.getReadOnly()) {
                    
                     marker = new google.maps.Marker({
                        map: localMap,
                        animation: google.maps.Animation.DROP,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                        position: new google.maps.LatLng(this.getCurrentlatitude(), this.getCurrentlongitude()),
                        title: this.getMapDescription()
                    });
                     marker.setMap(marker);
                     localMap.setCenter(marker);
                    //this.destroy();
                    
                }
                else {
                    google.maps.event.addListener(localMap, 'click', function (event) {
                        if (marker) {
                            marker.setMap(null);
                            latitude = null;
                            longitude: null;
                            address: null;
                        }
                        var me = this;
                        SenchaLocationFinder.app.latitude = event.latLng.lat();
                        SenchaLocationFinder.app.longitude = event.latLng.lng();
                         marker = new google.maps.Marker({
                            map: localMap,
                            animation: google.maps.Animation.DROP,
                            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                            position: new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()),
                        });
                         marker.setMap(marker);
                        
                    });
                }



                //marker.setMap(localMap);
            }
        }


    }

   

});