var util = require('util'),
  couchdb = require('felix-couchdb'),
  client = couchdb.createClient(5984, 'mrmoody.iriscouch.com'),
  db = client.db('mrmoody');

db.saveDoc('my-doc', {awesome: 'couch fun'}, function(er, ok) {
    if (er) {throw new Error(JSON.stringify(er));}
    util.puts('Saved my first doc to the couch!');
  });

db.getDoc('my-doc', function(er, doc) {
    if (er) {throw new Error(JSON.stringify(er));}
    util.puts('Fetched my new doc from couch:');
    util.puts(doc);
  });

