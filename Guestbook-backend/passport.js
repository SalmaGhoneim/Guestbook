var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

// load up the user model
var User = require("./models/user");

module.exports = (passport) => {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = "SecretKey";
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = User.findOne({ _id: jwt_payload.id });
        if (!user) {
          done(null, false);
        }
        done(null, user);
      } catch (error) {
        return done(err, false);
      }
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((_id, done) => {
    User.findById(_id, (err, user) => {
      if (err) {
        done(null, false, { error: err });
      } else {
        done(null, user);
      }
    });
  });
};
