Ext.define("SenchaLocationFinder.controller.HomeController", {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            homelist: 'homelist',
            
            addUserBtn: 'button[action = addUser]',
            logoutBtn: 'button[action= logout]',
            searchfn: 'homelist searchfield'
        },
        control: {
            'homelist': {
                itemsingletap: 'onHomeListItemTap'
            },
            

           

            'logoutBtn': {
                tap: 'onLogOut'
            },

            'searchfn': {
                scope: this,
                keyup: 'onSearchKeyUp'
            }

        }
    },

    onSearchKeyUp: function (field) {
        var value = field.getValue();
        
         /* To do the search functionality */

            //alert(Ext.getCmp('SenchaLocationFinder.store.Tasks'));
   //     store = Ext.getCmp('tasksStore').getStore();
   //     store.clearFilter();

   //     if (value) {
   //         //the user could have entered spaces, so we must split them so we can loop through them all  
   //         var searches = value.split(' '),
   //         regexps = [],
   //         i;

   //         //loop them all  
   //         for (i = 0; i < searches.length; i++) {
   //             //if it is nothing, continue  
   //             if (!searches[i]) continue;

   //             //if found, create a new regular expression which is case insenstive  
   //             regexps.push(new RegExp(searches[i], 'i'));
   //         }

   //         //now filter the store by passing a method  
   //         //the passed method will be called for each record in the store  
   //         store.filter(function (record) {
   //             var matched = [];

   //             //loop through each of the regular expressions  
   //             for (i = 0; i < regexps.length; i++) {
   //                 var search = regexps[i],
   //didMatch = record.get('first_name').match(search) ||
   //                     record.get('last_name').match(search);
   //                 //if it matched the first or last name, push it into the matches array   

   //                 matched.push(didMatch);

   //             }  //if nothing was found, return false (dont so in the store)                 

   //             if (regexps.length > 1 && matched.indexOf(false) != -1) {
   //                 return false;
   //             } else {
   //                 //else true true (show in the store)  
   //                 return matched[0];
   //             }
   //         });
   //     }
    },
    onLogOut: function () {
        Ext.Viewport.setActiveItem({
            xtype: 'loginscreen'
        });
    },
    onHomeListItemTap: function (list, index, target, record, e) {
        //alert(list.getStore().getAt(index).get('Latitude'));
        Ext.Viewport.setActiveItem({
            xtype: 'mapscreen',
            readOnly: true,
            latitude: record.get('Latitude'),
            longitude: record.get('Longitude'),
            description: record.get('Description')
        });

        /* We can use Navigation View using this */
        //alert('Item Tapped');
        //var navigationView = list.up('navigationview');
        //navigationView.push({
        //    title: record.data.TaskName,
        //    xtype: 'mapscreen'
        //    //record: record
        //});
    }

    


});