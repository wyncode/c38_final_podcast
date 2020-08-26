const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {
      type: String
    }
  });

const Genre = mongoose.model('Genre', GenreSchema);

module.exports = Genre;