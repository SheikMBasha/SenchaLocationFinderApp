Ext.define("SenchaLocationFinder.view.task.TaskForm", {
    extend: 'Ext.form.Panel',
    xtype: 'taskformpanel',
    id: 'taskformpanel',
    config: {
        listeners: {
            initialize: function () {
                Ext.getCmp('latlan').setValue(SenchaLocationFinder.app.latitude + ' ' +  SenchaLocationFinder.app.longitude);
            }
        },
        items: [
            //{
                //xtype: 'fieldset',
                //title: 'Task',
                //instructions: 'Enter Task Details',
                //items: [
                    {
                        xtype: 'selectfield',
                        id: 'sel',
                        label: 'Users',
                        store: 'Users',
                        displayField: 'UserName',
                        valueField: 'UserID'
                        //options: [
                        //    {
                        //        text: 'Amit',
                        //        value: '102'
                        //    },
                        //    {
                        //        text: 'Basha',
                        //        value: '101'
                        //    }
                        //]
                    },
                    {
                        xtype: 'textfield',
                        label: 'Task Name',
                        name: 'taskname'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Creation Date',
                        value: new Date(),
                        readOnly: true,
                    },
                    {
                        xtype: 'textfield',
                        id: 'latlan',
                        label: 'Latitude/ Longitude',
                        name: 'latlan',
                        clearIcon: true,
                        required: true,
                        placeHolder: 'Click Map Button on top for Values',
                    },
                    {
                         xtype: 'button',
                         text: 'Submit Task',
                         ui: 'confirm',
                         action: 'submittask'
                     }
                //]
            //}
        ]
    }
});