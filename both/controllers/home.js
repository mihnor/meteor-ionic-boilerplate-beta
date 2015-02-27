HomeController = AppController.extend({
  data: {

  }
});

FooController = AppController.extend({

});

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

MyEntrySignInController = AppController.extend({

    data: {

    }
});

ProfileController = AppController.extend({

    onBeforeAction: function (pause) {
        AccountsEntry.signInRequired(this);
    },
    onAfterAction: function () {
        Meta.setTitle('Profile');
    }
});

DashboardController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});
