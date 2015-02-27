Router.configure({
    layoutTemplate: 'appLayout'
});


Router.route('/', {
  name: 'foo'
});

Router.route('/dashboard');

Router.route('/canvas');


Router.route('/canvas/:_id', {
    name: 'canvas.show'
});

Router.route('/profile');

Router.route('/sign-inn', {
    template: 'myEntrySignIn',
    name: 'signIn'
});

signInRequired = function() {
    AccountsEntry.signInRequired(this);
    if (this.next) {
        return this.next();
    }
};

saveRedirectUrl = function() {
    if (!Meteor.loggingIn()) {
        if (!Meteor.user()) {
            Session.set('redirectToAfterSignIn', this.url);
        }
    }
    return this.next();
};

publicRoutes = _.union(Config.publicRoutes, ['entrySignIn', 'entrySignUp', 'entryForgotPassword']);

Router.onBeforeAction(saveRedirectUrl, {
    except: _.union(publicRoutes, ['entrySignOut'])
});

Router.onBeforeAction(signInRequired, {
    except: publicRoutes
});

signInProhibited = function() {
    if (Meteor.user()) {
        return Router.go('dashboard');
    } else {
        if (this.next) {
            return this.next();
        }
    }
};

Router.onBeforeAction(signInProhibited, {
    only: ['entrySignUp', 'entrySignUp', 'entryForgotPassword']
});
