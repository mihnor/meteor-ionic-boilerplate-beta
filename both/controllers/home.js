CanvasController = AppController.extend({

    waitOn: function() {
        return this.subscribe('canvas');
    },
    data: {
        canvas: Canvas.find({})
    }

});

CanvasShowController = AppController.extend({

    waitOn:function () {
        return this.subscribe('canvas', Router.current().params._id);

}


});


ProfileController = AppController.extend({

    onBeforeAction: function (pause) {
        AccountsEntry.signInRequired(this);
    },
    onAfterAction: function () {
        Meta.setTitle('FOO PROFILE');
    },

    waitOn: function() {
        return this.subscribe('profilePictures');
    }

});

DashboardController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});
