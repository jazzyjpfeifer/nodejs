var connection = require('../../config/db');

// SETUP Post Table
connection.query( 'DROP TABLE IF NOT EXISTS posts', function (err, results) {
    if(err) {
        console.log(err);
    } else {
        results;
}
})

