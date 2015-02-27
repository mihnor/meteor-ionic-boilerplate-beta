/**
 * Created by apple on 24/02/15.
 */
Template.canvas.created = function () {
    this.autorun(function () {
        this.subscription = Meteor.subscribe('canvas');
    }.bind(this));
};

Template.canvas.rendered = function () {
    this.autorun(function () {
        if (!this.subscription.ready()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
};

Template.canvas.helpers({
    canvas: function () {
        return Canvas.find({}, {sort: {title: -1}});
    }
});