Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

Meteor.publishComposite("canvass", function() {
    return {
        find: function() {
            return Canvas.find({});
        }
        // ,
        // children: [
        //   {
        //     find: function(item) {
        //       return [];
        //     }
        //   }
        // ]
    }
});


Meteor.publish('canvas', function() {
    return Canvas.find();
});

Meteor.publish('canvasSearch', function(query) {
    check(query, String);

    if (_.isEmpty(query)) {
        return this.ready();
    }

    return Canvas.search(query);
});