var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  role: [{
    type: String,
    default: 'EXCHANGEUSER',
    enum: ['ADMIN', 'EXCHANGEUSER', 'SUPPORTUSER']
  }]
});

module.exports = userSchema;
