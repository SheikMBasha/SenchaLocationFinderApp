Ext.define("SenchaLocationFinder.view.LoginScreen", {
    extend: 'Ext.form.Panel',
    xtype: 'loginscreen',
    //fullscreen: true,
    //requires: ['Ext.form.FieldSet', 'Ext.form.Password','Ext.Label'],
    config: {
        items: [
            {
                xtype: 'fieldset',
                title: 'Login',
                flex: 2,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'username',
                        label: 'username',
                        id: 'usernametextfield',
                        clearIcon: true,
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'passwordfield',
                        label: 'passwordfield',
                        id: 'passwordtextfield',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'loginButton',
                text: 'Log In',
                action: 'doLogin'
            }
        ]
    }
});