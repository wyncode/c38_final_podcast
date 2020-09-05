const service = require('./podcast.service');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Podcast = require('../../db/models/podcast');
const podcast = require('../../routes/secure/router');
//const { response } = require('../../routes/secure/router');
const emptyArray = [];

exports.getSelections = async (req, res) => {
  const { idArray } = req.body;
  idArray.forEach(async (podcast) => {
    let cast = await Podcast.findOne({ _id: podcast });
    emptyArray.push(cast);
  });
  console.log(emptyArray);
  res.json(emptyArray);
};

exports.getAllCategories = async (req, res) => {
  const { err, categories } = await service.getAllCategories({});
  if (categories) {
    return res.status(200).json({
      success: true,
      categories
    });
  }
  return res.status(400).json({
    success: false,
    message: 'Some Thing went wrong'
  });
};

exports.getPodcastById = async (req, res) => {
  console.log('hit');
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send('Not a valid podcast id');
  try {
    const podcast = await Podcast.findOne({ _id });
    if (!podcast) return res.sendStatus(404);
    res.json(podcast);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

exports.AddCategories = async (req, res) => {
  const { err, category } = await service.addCategories(req.body);
  if (category) {
    return res.status(200).json({
      success: true,
      category
    });
  }
  return res.status(400).json({
    success: false,
    message: 'Some Thing went wrong'
  });
};

exports.getAllPodCast = async (req, res) => {
  const { err, podcast } = await service.getAllPodCast([{}]);
  if (podcast) {
    return res.status(200).json({
      success: true,
      podcast
    });
  }
  return res.status(400).json({
    success: false,
    message: 'Some Thing went wrong'
  });
};

exports.getAllPodCastOfSingleCategory = async (req, res) => {
  const { ids } = req.body;
  const { err, podcast } = await service.getAllPodCast([
    {
      $match: {
        genre: { $in: ids.map((id) => ObjectId(id)) }
      }
    },
    {
      $lookup: {
        from: 'genres',
        localField: 'genre',
        foreignField: '_id',
        as: 'category'
      }
    },
    {
      $unwind: { path: '$category' }
    },
    {
      $project: {
        author: true,
        title: true,
        coverImage: true,
        likes: true,
        description: true,
        category: '$category.name',
        categoryId: '$category._id'
      }
    }
  ]);
  if (podcast) {
    let catOne = podcast.filter(
      (rec) => String(rec.categoryId) === String(ids[0])
    );
    let catTwo = podcast.filter(
      (rec) => String(rec.categoryId) === String(ids[1])
    );
    let catThree = podcast.filter(
      (rec) => String(rec.categoryId) === String(ids[2])
    );

    return res.status(200).json({
      success: true,
      podcast: {
        catOne,
        catTwo,
        catThree
      }
    });
  }
  return res.status(400).json({
    success: false,
    message: 'Some Thing went wrong'
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const query = {
    $and: [
      {
        email: email
      },
      {
        password: password
      }
    ]
  };
  const { err, user } = await service.isUserPortalExists(query);
  console.log(err, user);
  if (user && Array.isArray(user) && user.length) {
    return res.status(200).json({
      success: true,
      user: user
    });
  }
  return res.json({
    success: false,
    message: ' Incorrect crendentials'
  });
};

exports.addPodCastToCategory = async (req, res) => {
  const { categoryId } = req.body;
  let data = {
    genre: ObjectId(categoryId),
    author: faker.name.findName(),
    title: faker.lorem.slug(),
    coverImage: faker.image.imageUrl(),
    numOfEpisodes: faker.random.number(),
    length: faker.random.number(),
    likes: faker.random.number(),
    description: faker.lorem.paragraph()
  };

  const { err, newPodCast } = await service.addPodCastToCategory(data);
  if (newPodCast) {
    return res.json({
      success: true,
      podcast: newPodCast
    });
  }
  return res.json({
    success: false,
    message: 'Some Thing went wrong'
  });
};
