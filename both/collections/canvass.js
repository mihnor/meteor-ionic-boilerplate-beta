Canvas = new Mongo.Collection('canvas');

Canvas.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});



Canvas.helpers({
    datePosted: function () {
        return moment(this.createdAt).format('M/D');
    },
    author: function () {
        return Meteor.users.findOne({_id: this.userId});
    }
});

RegExp.escape = function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

Canvas.search = function(query) {
    if (!query) {
        return;
    }
    return Canvas.find({
        name: { $regex: RegExp.escape(query), $options: 'i' }
    }, {
        limit: 20
    });
};

Canvas.attachSchema(new SimpleSchema({

    title: {
        type: String,
        label: "Name of Project",
        max: 200,
        optional: true
    },
    author: {
        type: String,
        label: "Author",
        optional: true
    },
    field1: {
        type: String,
        label: "Value Proposition",
        optional: true,
        autoform: {
            rows: 3,
            'label-type': 'stacked',
            placeholder:"Ser o maior"
        },

    },
    field2: {
        type: String,
        label: "Customer Segments",
        optional: true
    },
    field3: {
        type: String,
        label: "Customer Relationship",
        optional: true
    },
    field4: {
        type: String,
        label: "Channels",
        optional: true
    },
    field5: {
        type: String,
        label: "Key Activities",
        optional: true
    },
    field6: {
        type: String,
        label: "Key Resources",
        optional: true
    },
    field7: {
        type: String,
        label: "Key Partners",
        optional: true
    },
    field8: {
        type: String,
        label: "Cost Structure",
        optional: true
    },
    field9: {
        type: String,
        label: "Revenue Streams",
        optional: true
    },
    lastEdited: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true,
        optional: true
    },
    tagline: {
        type: String,
        label: "Brief summary",
        optional: true,
        max: 1000,
        optional: true
    },
    numberOfComments:{
        type: Number,
        label: "Comments",
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true
    }
}));