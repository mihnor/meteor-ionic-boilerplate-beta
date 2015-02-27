Meteor.startup(function() {

  Factory.define('item', Items, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Items.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('item');
    });

  }

    Factory.define('canvas', Canvas, {
        title: function() { return Fake.word(); },
        tagline: function() { return Fake.sentence();}
    });

    if (Canvas.find({}).count() === 0) {

        _(10).times(function(b) {
            Factory.create('canvas');
        });

    }

});
