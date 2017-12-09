module.exports = function (app) {
  require("./models/model.server.js");
  require("./services/user.service.server.js") (app);
};
