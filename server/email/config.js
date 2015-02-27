Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@sandbox4a50fb4f5a6c49918098108a4a6982eb.mailgun.org',
    password: '855f45714bcc755d2b00c3d2b2e48c6d'
  });

  Meteor.methods({
    'sendContactEmail': function(name, email, message) {
      this.unblock();

      Meteor.Mailgun.send({
        to: 'recipient@example.com',
        from: name + ' <' + email + '>',
        subject: 'New Contact Form Message',
        text: message,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
    }
  });
});
