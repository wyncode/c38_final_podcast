// Importing 3rd Party Modules
import express from "express";
const podcast = express();


podcast.use('/api' , require('../../features/podcast/podcast.router'));


export { podcast };