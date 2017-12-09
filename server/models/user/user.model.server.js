var userSchema = require('./user.schema.server');
var mongoose = require('mongoose');
var userModel = mongoose.model("UserModel", userSchema);
userModel.createUser = createUser;
userModel.findUserById = findUserById;
module.exports = userModel;

function createUser(user) {
  return userModel.create(user);
}
function findUserById(userId) {
  return userModel.findById(userId);
}
