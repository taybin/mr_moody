/*
 * POST update db
 */

var settings = require('../settings').settings;

var couchdb = require('felix-couchdb'),
    client = couchdb.createClient(settings.db_port, settings.db_server),
    db = client.db(settings.db_name);

exports.mark = function(req, res){
    var date = new Date().toDateString();

    var data = {
        type: "mood_mark",
        happy: req.body.happy === "true" ? 1 : -1,
        date: date
    };

    db.saveDoc(data, function(er, ok) {
        if (er) {throw new Error(JSON.stringify(er));}
        req.session.date = date;
        res.send(req.body);
    });
};
