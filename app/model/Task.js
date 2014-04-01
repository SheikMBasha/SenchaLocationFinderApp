Ext.define("SenchaLocationFinder.model.Task", {
    extend: 'Ext.data.Model',

    config: {
        fields: ['TaskId', 'TaskName', 'Description', 'Latitude', 'Longitude'],

        validations: [
            {
                type: 'presence', field: 'Description', presenceMessage: 'Description Madatory!!'
            }
        ]
    }
});