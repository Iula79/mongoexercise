var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

assert.equal(1, 1);


MongoClient.connect('mongodb://localhost:27017/mongomart', function(connecterr, db) {

    assert.equal(null, connecterr);
    var query = {category: "Apparel"};
    console.log("Successfully connected to MongoDB.");

    var collection = db.collection('item');

    collection.find(query).toArray(function(err, docs) {
        assert.equal(err, null);
        docs.forEach(function(doc) {
            console.log("The " + doc._id + "th item on the collection is a wonderful " + doc.title);
        });
        db.close();
    });
});
