var strava = require('strava-v3');
var fs = require('fs');

var filePath = 'data/strava.json';

strava.activities.get({id: 28684}, function(err, payload) {
    if(!err) {
        //fs.writeFile(filePath, JSON.stringify(payload));
        console.log(payload);
        //console.log(typeof JSON.stringify(payload));
    } else {
        console.log(err);
    }
});