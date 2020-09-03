// Importing 3rd Party Modules
const express = require('express');
const podcast = express();

podcast.use('/api', require('../../features/podcast/podcast.router'));

module.exports = podcast;
