const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const myListSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    position: { type: Number }, //you can reorder them
    owner:{
      type: Schema.Types.ObjectId,
      //this means that this object id belongs to this user
      ref: 'User'
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: true
      }
    ]
  },
  {
    timestamps: true
  }
);

const ListModel = mongoose.model('List', myListSchema);


module.exports = ListModel;
