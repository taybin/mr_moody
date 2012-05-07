/*
 * GET mood aggregate
 */
var settings = require('../settings').settings;

var couchdb = require('felix-couchdb'),
    client = couchdb.createClient(settings.db_port, settings.db_server),
    db = client.db(settings.db_name);

exports.moods = function(req, res) {
    db.view("date_values", "date_values", {group: true}, function(err, data) {
        res.send(data);
    });
};
