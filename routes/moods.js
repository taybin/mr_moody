/*
 * GET mood aggregate
 */

var couchdb = require('felix-couchdb'),
    client = couchdb.createClient(5984, 'mrmoody.iriscouch.com'),
    db = client.db('mrmoody');

exports.moods = function(req, res) {
    db.view("date_values", "date_values", {group: true}, function(err, data) {
        res.send(data);
    });
};
