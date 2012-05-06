/*
 * POST update db
 */

var couchdb = require('felix-couchdb'),
    client = couchdb.createClient(5984, 'mrmoody.iriscouch.com'),
    db = client.db('mrmoody');

exports.mark = function(req, res){
    db.saveDoc(
            {
                happy: req.body.happy,
                date: req.body.date
            },
            function(er, ok) {
                if (er) {throw new Error(JSON.stringify(er));}
                res.send(req.body);
            });
};
