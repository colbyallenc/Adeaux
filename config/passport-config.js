const bcrypt        = require('bcrypt');
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserModel     = require('../models/user-model');

// module.exports = function (passport) {
//   passport.use(new LocalStrategy(
//     {
//     username: 'loginUsername',
//     password: 'loginPassword'
//     },
//     //callbacks
//     (username, password, next) => {
//     User.findOne(
//       { username: username },
//       (err, foundUser) => {
//       if (err) {
//         next(err);
//         return;
//       }
//
// //first check email then password
// //if user from db is empty the email is invalid (null)
//       if (!foundUser) {
//         next(null, false, { message: 'Incorrect username' });
//         return;
//       }
//
//       //will be true or false if the passwords match
//   const didPasswordMatch =  bcrypt.compareSync(password, foundUser.encryptedPassword);
//       //if they didnt match then the password is invalid
//       if (!didPasswordMatch) {
//         next(null, false, { message: 'Incorrect password' });
//         return;
//       }
//       next(null, foundUser);
//     });
//   }));
//
//   passport.serializeUser((loggedInUser, cb) => {
//     cb(null, loggedInUser._id);
//   });
//
//
//   passport.deserializeUser((userIdFromSession, cb) => {
//     User.findById(userIdFromSession, (err, userDocument) => {
//       if (err) {
//         cb(err);
//         return;
//       }
//
//       cb(null, userDocument);
//     });
//   });




// };


passport.serializeUser((userFromDb, next) => {
    next(null, userFromDb._id);
});

passport.deserializeUser((idFromSession, next) => {
    UserModel.findById(
      idFromSession,

      (err, userFromDb) => {
          if (err) {
            next(err);
            return;
          }

          next(null, userFromDb);
      }
    );
});

passport.use(new LocalStrategy(
  {
    usernameField: 'loginEmail',
    passwordField: 'loginPassword'
  },
  (apiEmail, apiPassword, next) => {
      UserModel.findOne(
        { email: apiEmail },
        (err, userFromDb) => {
            if (err) {
              next(err);
              return;
            }

            if (!userFromDb) {
              next(null, false, { message: 'Email invalid, fool.' });
              return;
            }

            if (!bcrypt.compareSync(apiPassword, userFromDb.encryptedPassword)) {
              next(null, false, { message: 'Password invalid, sucka\'.' });
              return;
            }

            next(null, userFromDb);
        }
      );
  }
));
