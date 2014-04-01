Ext.define("SenchaLocationFinder.controller.TaskController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            taskback: 'taskformcontainer toolbar button[action = TaskFormBack]',
            rendermapbtn: 'taskformcontainer toolbar button[action = ShowMap]',
            addTaskBtn: 'button[action = addTask]',
            submitTaskBtn: 'button[action = submittask]',
            taskformvalues: '#taskformpanel'
        },
        control: {
            taskback: {
                tap: 'onTaskFormBack'
            },
            rendermapbtn: {
                tap: 'onRenderMapTap'
            },
            'addTaskBtn': {
                tap: 'onAddTaskTap'
            },
            'submitTaskBtn': {
                tap: 'onSubmitTaskBtn'
            }
        },

        
    },
    onTaskFormBack: function () {
        Ext.Viewport.setActiveItem({
            xtype: 'homelistcontainer'
        });
    },

    onAddTaskTap: function () {
        Ext.Viewport.setActiveItem({
            xtype: 'taskformcontainer'
        });
    },

    onRenderMapTap: function () {
        Ext.Viewport.setActiveItem({
            xtype: 'mapscreen',
            readOnly: false
        });
    },

    onSubmitTaskBtn: function () {
        var fields = this.getTaskformvalues().getValues();
        var task = Ext.create('SenchaLocationFinder.model.Task');
        task.set('Description', fields['description']);
        var validationResults = task.validate();

        if (validationResults.isValid()) {
            Ext.Ajax.request({
                url: 'http://locationtrackerservice.somee.com/LocationTrackerService/RestServiceImpl.svc/tasks/AddTasks',
                //url: 'http://localhost:59906/LocationFinder.svc/tasks/AddTasks',
                params: {
                    id: SenchaLocationFinder.app.loggedInUser,
                    taskname: fields['taskname'],
                    description: fields['description'],
                    coordinates: fields['latlan'],
                    creationDate: new Date,
                },
            });

            Ext.Viewport.setActiveItem({
                xtype: 'homelistcontainer'
            });
        }
        else {
            alert('Required Fields missing!!');
        }
  
        //alert(this.getTaskformvalues(0).getTaskname());
    }
    
});