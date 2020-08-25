const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema(
  {
    genre: {
      type: String
    },
    author: {
      type: String
    },
    title: {
      type: String
    },
    coverImage: {
      type: String
    },
    numOfEpisodes: {
      type: Number
    },
    length: {
      type: Number
    },
    likes: {
      type: Number
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;
