// const TwitterStrategy = require("passport-twitter").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

// TWITTER STRATEGY 
// module.exports = function (passport) {
//     passport.use(new TwitterStrategy({
//         consumerKey: TWITTER_CONSUMER_KEY,
//         consumerSecret: TWITTER_CONSUMER_SECRET,
//         callbackURL: "http://localhost:2001/auth/twitter/redirect"
//       },
//       function(token, tokenSecret, profile, cb) {
//         User.findOrCreate({ twitterId: profile.id }, function (err, user) {
//           return cb(err, user);
//         });
//       }
//     ));

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => done(err, user));
//   });
// };

// LOCAL STRATEGY
module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};