Accounts.config({
    sendVerificationEmail: false
});

if (Meteor.isClient) {
    Meteor.startup(function() {
        if (Config.username) {
            AccountsEntry.config({
                profileRoute: 'profile'
            });
            return {
                homeRoute: '/',
                dashboardRoute: '/dashboard',
                signInTemplate: 'myEntrySignIn',
                passwordSignupFields: 'USERNAME_AND_EMAIL'
            };
        } else {
            return AccountsEntry.config({
                homeRoute: '/',
                dashboardRoute: '/dashboard',
                signInTemplate: 'myEntrySignIn',
                passwordSignupFields: 'EMAIL_ONLY'
            });
        }
    });
}