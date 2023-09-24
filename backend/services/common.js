const passport = require("passport");
exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};
exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGQ0OGJlYzk5ZWY2ZDI1ZjcxMzVlZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk1NTM2MTY0fQ.lApyD4xfX7pz1AIgRqVgpfjww6cHxx7iNKXGXEnUr3g";
  return token;
};
