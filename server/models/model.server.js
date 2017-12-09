var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost:27017/massivx';
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133094.mlab.com:33094/heroku_nqbhvct4'; // use yours
}
var db = mongoose.connect(connectionString, { useMongoClient: true });

module.exports = db;
