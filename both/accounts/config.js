Accounts.config({
    sendVerificationEmail: true
});

if (Meteor.isClient) {
    Meteor.startup(function() {
        if (Config.username) {
            AccountsEntry.config({
                profileRoute: 'canvas'
            });
            return {
                homeRoute: '/',
                dashboardRoute: '/canvas',
                signInTemplate: 'myEntrySignIn',
                signUpTemplate: 'myEntrySignUp',
                forgotPasswordTemplate: 'myForgotPassword',
                passwordSignupFields: 'USERNAME_AND_EMAIL'
            };
        } else {
            return AccountsEntry.config({
                homeRoute: '/',
                dashboardRoute: '/canvas',
                signInTemplate: 'myEntrySignIn',
                signUpTemplate: 'myEntrySignUp',
                forgotPasswordTemplate: 'myForgotPassword',
                passwordSignupFields: 'EMAIL_ONLY'
            });
        }
    });
}