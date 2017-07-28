const passport = require('passport');
const express = require('express');
const bcrypt = require('bcrypt');


const UserModel = require('../models/user-model');


const router = express.Router();
//
// router.get('/api/signup',
//   (req, res, next) => {
//     res.render('auth/signup-view.ejs', {
//     });
//   }
// );

router.post('/api/signup', (req, res, next) => {
      const theFullName = req.body.signupFullName;
      const theEmail = req.body.signupEmail;
      const thePassword = req.body.signupPassword;

  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(theFullName);
  console.log(thePassword);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
//400 client error
//500 an unknown error that you cant recover from
//in api its always good to set status codes to always let the user know whats happening
  if (!theEmail || !thePassword) {
    res.status(400).json({ message: 'Provide username and password.' });
    return;
  }

//in login youre using to see if there is a user there
//in signup the use cant be there to signup

  UserModel.findOne(
    { email: theEmail },
      // {username: 1 },
    (err, foundUser) => {
      //if there is an error that we cant recover from we do a status 500
    if (err) {
      res.status(500).json({ message: 'Something went wrong. Error 500.' });
      return;
    }
      //if username is taken - cannot register
    if (foundUser) {
      res.status(400).json({ message: 'The username already exists.' });
      return;
    }

    //encrypt password
    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(thePassword, salt);
                                            //   | scrambled password that will save
// INSTANCE of new User
    const theUser  = new UserModel({
          fullName: theFullName,
          email: theEmail,
          encryptedPassword: hashPass
    });

    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(theUser);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

    theUser.save((err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong saving.' });
        return;
      }

      //log them in automatically
      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong logging in.' });
          return;
        }

        //if everything works send back the user information to
        //whoever requested this api
        res.status(200).json(theUser);
         });

      });
    });
  });


//~~~~~~~~~ LOGIN ~~~~~~~~
//
// router.get('/api/login',
//   (req, res, next) => {
//     res.render('auth/login-view.ejs', {
//       errorMessage: req.flash('error')
//     });
//   }
// );

router.post('/api/login', (req, res, next) => {
  //callback to localStrategy on what the logic is supposed to be
  const myFunction = passport.authenticate('local',(err, theUser, failureDetails) => {
    if (err) { //ERROR 500
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

    if (!theUser) {   // if login failed - error 401 - unauthorized
        res.status(401).json(failureDetails);
        return;
      }

      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Error logging in the user' });
          return;
        }
        // Successful Login: now logged in (notice req.user)
        // res.status(200).json(req.user);
        res.status(200).json(theUser);
      });
    });

    myFunction(req, res, next);
});
// ~~~~~~~~~~~~~~~~END OF LOGIN~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~LOGOUT~~~~~~~~~~~~~~~~~~~~~~~~~~~~
router.post('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Logout Success.' });
});

// ~~~~~~~~~~~~~~~~END OF LOGOUT~~~~~~~~~~~~~~~~~~~~~

// router.get('/api/checklogin', (res,req,next) => {
//   if(req.isAuthenticated()) {
//     res.status(200).json(req.user);
//     return;
//   }
//   res.status(401).json({ message: 'Unauthorized'});
// });

// OR THIS CAN WORK AS WELL FOR CHECKLOGGEDIN


router.get('/api/checklogin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.status(401).json({ message: 'Unauthorized.' });
});


function gtfoIfNotLogged (req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(403).json({ message: 'FORBIDDEN.' });
    return;
  }

  next();
}

router.get('/private', gtfoIfNotLogged, (req, res, next) => {
  res.json({ message: 'Todays lucky number is 7677' });
});


module.exports = router;
