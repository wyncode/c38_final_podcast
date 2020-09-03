const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  AddCategories,
  getAllPodCast,
  getAllPodCastOfSingleCategory,
  login,
  addPodCastToCategory,
  getPodcastById,
  getSelections
} = require('./podcast.controller');
router.get('/getAllCategories', getAllCategories);

router.post('/getSelections', getSelections);

router.get('/podcast/:id', getPodcastById);

router.post('/addCategory', AddCategories);

router.get('/getAllPodCast', getAllPodCast);

router
  .route('/getAllPodCastOfSingleCategory')
  .post(getAllPodCastOfSingleCategory);
// login api
router.route('/login').post(login);

router.route('/addPodCastToCategory').post(addPodCastToCategory);

module.exports = router;
