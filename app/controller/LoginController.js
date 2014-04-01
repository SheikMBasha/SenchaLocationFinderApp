Ext.define('SenchaLocationFinder.controller.LoginController', {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            userName: '#usernametextfield',
            password: '#passwordtextfield',
            loginbtn: 'button[action=doLogin]'
        },
        //init: function () {
        //    console.log("Inside Login Controller");
        //    alert("Inside Login Controller");
        //    this.control({
        //        "#loginButton": {
        //            click: this.loginButtonClicked
        //        }
        //    });
        //},
        control: {
            loginbtn: {
                tap: 'loginButtonClicked'
            }
        }

       
    },
    loginButtonClicked: function () {
        //SenchaLocationFinder.app.loggedInUser = this.getUserName().getValue();
        //alert('LoggedIn User: ' + SenchaLocationFinder.app.loggedInUser);
        //alert("HI!!" + this.getUserName().getValue());

        Ext.Ajax.request({
            //url: 'http://localhost/LocatorService/LocationFinder.svc/users',
            url: 'http://locationtrackerservice.somee.com/LocationTrackerService/RestServiceImpl.svc/users',
            params: {
                username: this.getUserName().getValue(),
                password: this.getPassword().getValue()
            },
            success: function (response) {
                //alert('Success!!' + response.responseText);
                SenchaLocationFinder.app.loggedInUser = response.responseText;
                //alert('Global varialbe is: ' + SenchaLocationFinder.app.loggedInUser);

                Ext.Viewport.setActiveItem({
                    xtype: 'homelistcontainer'
                });
            },
            failure: function (response) {
                alert('Authentication Failed!!');
            }

        });

        //Ext.Viewport.setActiveItem({
        //    xtype: 'homelistcontainer'
        //});
    }

});