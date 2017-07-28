const express = require('express');

const ListModel = require('../models/list-model');
const CardModel = require('../models/card-model');
const ensureLoggedInApiVersion = require('../lib/ensure-logged-in-api-version');

const router = express.Router();
//GET : Render Post List
// router.get('/api/list', (req, res, next) => {
//   Post.find((err, postsList) => {
//     if (err) {
//       res.json(err);
//       return;
//     }
//     res.json(postsList);
//   });
// });

//POST : Create/Save a new post
router.post('/api/lists', ensureLoggedInApiVersion, (req, res, next) => {
ListModel
  .findOne({owner: req.user._id})
  //find me a list with the greatest position -1å
  .sort({position: -1}) //sort the results of a db query (1,2,3) | -1 would be (3,2,1- descending)
  .exec((err, lastList)=>{
    if(err) {
      res.status(500).json({ message: 'Find List went wrong.' });
      return;
    }
    // position default to 1 if there are no lists (new user)
    let newPosition = 1;

    if (lastList){
      // but use the last list's position (+1) if we have one
      newPosition = lastList.position + 1;
    }

//CREATE
    const theList = new ListModel ({
      title: req.body.listTitle,
      position: newPosition,
      owner: req.user._id //to use this API you must be logged in
    });

//SAVE it to the database
    theList.save((err) => {
      if (err) {
      res.status(500).json({ message: 'List save error.' });
        return;
      }

      res.status(200).json(theList);
    });
  });//execute the query with exec end
}); //end of CREATE


//
//to find the users information from the cards from the list
//POPULATE: a way to populate all of the ID's
router.get('/api/lists',  ensureLoggedInApiVersion, (req, res, next) => {
  ListModel
  .find({ owner: req.user._id })
  .populate('cards')
  .exec((err, allTheLists) => {
    if(err) {
      res.status(500).json({ message: 'List find error.'});
      return;
    }

    res.status(200).json(allTheLists);
  }); //close exec
}); //close get '/api/lists'



// router.get("/posts/:id", (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400)
//       .json({ message: "specified id is not valid"});
//       return;
//   }
//
//   Post.findById(req.params.id, (err, thePost) => {
//     if (err) {
//       res.json(err);
//       return;
//     }
//
//     res.json(thePost);
//   });
// });
//
// router.put('/posts/:id', (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400)
//       .json({ message: 'Specified id is not valid'});
//     return;
//   }
//
//   const updates = {
//     content: req.body.content,
//     name: req.body.name,
//     specs: req.body.specs,
//     image: req.body.image
//   };
//
//   Post.findByIdAndUpdate(req.params.id, updates, (err) => {
//     if (err) {
//       res.json(err);
//       return;
//     }
//
//     res.json({
//       message: "Post updated sucessfully"
//     });
//   });
// });
//
// router.delete('/posts/:id', (req, res, next) => {
//   if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400)
//       .json({ message: "Specified id is not valid"});
//     return;
//   }
//
//   res.json({
//     message: "Post has been removed"
//   });
// });
//
//
module.exports = router;
