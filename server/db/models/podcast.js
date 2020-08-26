const mongoose = require('mongoose');
const { ObjectId } = require( 'mongodb' );
const Schema = mongoose.Schema;

const podcastSchema = new Schema(
  {
    genre: {
      type: ObjectId,
      ref:"genre Id"
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