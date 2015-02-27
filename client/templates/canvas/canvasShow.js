/**
 * Created by apple on 25/02/15.
 */
Template.canvasShow.created = function () {
    //this.autorun(function () {
    //    this.subscription = Meteor.subscribe('canvas', Router.current().params._id);
    //}.bind(this));
};

Template.canvasShow.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
};

Template.canvasShow.helpers({
    canvas: function () {
        return Canvas.findOne({_id: Router.current().params._id});
    }
});