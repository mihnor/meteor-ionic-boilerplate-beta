AppController = RouteController.extend({
  layoutTemplate: 'appLayout',

    waitOn: function(){
        //return this.subscribe('user');
        }
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});
