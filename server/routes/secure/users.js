const router = require('express').Router(),
  { sendCancellationEmail } = require('../../emails/index'),
  cloudinary = require('cloudinary').v2;
const User = require('../../db/models/user.model');
const Genre = require('../../db/models/genre.model');
const Podcast = require('../../db/models/podcast');
const mongoose = require('mongoose');

// Get current user
router.get('/api/users/me', async (req, res) => res.json(req.user));

router.post('/api/podcast/favorite/:id', async (req, res) => {
  let userData = req.body;
  let preferences = [];
  let favorites = [];
  userData.map((item) => {
    preferences.push(item.genre);
    favorites.push(item._id);
  });

  const userId = req.params.id;

  User.findByIdAndUpdate(
    userId,
    { preferences: preferences, favorites: favorites },
    function (err, docs) {
      if (err) {
        return res.json({ error: 'something went wrong' });
      } else {
        return res.json({ message: 'updated successfully' });
      }
    }
  );
});

router.get('/api/user/:id', async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid user id');
  try {
    let obj = {};
    const user = await User.findOne({ _id });
    if (!user) return res.sendStatus(404);
    const genreArray = await user.preferences;
    const genre = await Promise.all(
      genreArray.map(async (item) => {
        const results = await Genre.find().where('_id').in(item).exec();
        return results;
      })
    );
    const favoritesArray = await user.favorites;
    const favorite = await Promise.all(
      favoritesArray.map(async (item) => {
        const results = await Podcast.find().where('_id').in(item).exec();
        return results;
      })
    );
    const favoriteFinal = favorite.flat();
    const genreFinal = genre.flat();
    obj.favorite = favoriteFinal;
    obj.genre = genreFinal;
    return res.json(obj);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Update a user
router.patch('/api/users/me', async (req, res) => {
  const updates = Object.keys(req.body);
  console.log(updates);
  const allowedUpdates = [
    'name',
    'email',
    'password',
    'avatar',
    'preference',
    'favorites'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates!' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});
// Logout a user
router.post('/api/users/logout', async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'Logged out' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Logout all devices
router.post('/api/users/logoutAll', async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'all devices logged out' });
  } catch (e) {
    res.status(500).send();
  }
});

// Delete a user
router.delete('/api/users/me', async (req, res) => {
  try {
    await req.user.remove();
    sendCancellationEmail(req.user.email, req.user.name);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
});

// Upload avatar
router.post('/api/users/avatar', async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.json({ error: e.toString() });
  }
});
// Update password
router.put('/api/password', async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
});

module.exports = router;
