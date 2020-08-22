const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema(
  {
    podcastName: {
      type: String,
      required: true,
      trim: true
    },
    fav: {
      type: Boolean,
      required: true,
      trim: true
    }
  },

  {
    timestamps: true
  }
);

const Library = mongose.model('Library', librarySchema);

module.exports = Library;
