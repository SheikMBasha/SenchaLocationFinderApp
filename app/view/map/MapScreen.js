Ext.define("SenchaLocationFinder.view.map.MapScreen", {
    extend: "Ext.Panel",
    xtype: 'mapscreen',
    config: {
        readOnly: false,
        latitude: '',
        longitude: '',
        description: '',
        listeners: {
            initialize: function () {
                var me = this;
                if (me.getReadOnly()) {
                    me.add({
                        xtype: 'mapwidget',
                        readOnly: true,
                        currentlatitude: this.getLatitude(),
                        currentlongitude: this.getLongitude(),
                        mapDescription: this.getDescription()
                    });
                }
                else {
                    me.add({
                        xtype: 'mapwidget',
                        readOnly: false
                    });
                }
            }

            },
            
        items: [
            {
                xtype: 'toolbar',
                title: 'Map View',
                height: '50',
                docked: 'top',
                items: [
                   {
                       xtype: 'button',
                       text: 'back',
                       ui: 'back',
                       id: 'mapbackbutton',
                       action: 'MapBack'
                   }
                ]
            }
            //{
            //    xtype: 'mapwidget',
            //    readOnly: false
            //}
            //{
            //    xtype: 'map',
            //    id: 'geomap',
            //    //fullscreen: true,
            //    useCurrentLocation: true,
            //    listeners: {
            //        initialize: function () {
            //            alert('Inside Map Initilize');
            //        },
            //        //onTap: function () {
            //        //    alert('click!!');
            //        //},
            //        maprender: function (self, cmpmap) {
            //            /* to add 'tap' and 'click' event listener */
            //            var p1 = new google.maps.LatLng(13.031652163494742, 77.6045036315918);
            //            var p2 = new google.maps.LatLng(12.907528813968172, 77.64673233032227);
            //            var dist = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(4);
                    
            //            alert('Dist is: ' + dist);
            //            /* to Add Marker */
            //            //console.log("Map Renderred!!");
            //            var localMap = Ext.getCmp('geomap').getMap();
            //            var marker = new google.maps.Marker({
            //                map: localMap,
            //                animation: google.maps.Animation.DROP,
            //                icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            //                position: new google.maps.LatLng(12.82787, 80.219722),
            //                title: "Hello World!"
            //            });

            //            // Adding Click Listener in google map to get the latitude and longitude                        
            //            google.maps.event.addListener(localMap, 'click', function (event) {
            //                alert('Latitude is :' + event.latLng.lat() + 'Longitude is : ' + event.latLng.lng());
            //                var marker = new google.maps.Marker({
            //                    map: localMap,
            //                    animation: google.maps.Animation.DROP,
            //                    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            //                    position: new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()),
            //                    title: "Hello World!"
            //                });
            //                marker.setMap(marker);
            //            });
            //            // End click Listener

            //            marker.setMap(localMap);
            //            //marker.setMap(localMap);
            //            //alert(Ext.getCmp('geomap').getMap());


            //        }
            //    }
            //}
                ]
    }
});