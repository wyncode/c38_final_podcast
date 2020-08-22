const router = require('express').Router();
// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
router.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});
// END DEMO

// //Create User
// router.post('/user', async (req, res) => {
//   const { name, email, password } = req.body;
//   const newUser = new User({
//     ...req.body
//   });
//   await newUser.save();
//   res.send({ user: newUser });
// });
module.exports = router;
