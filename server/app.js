require('./db/config');
const express = require('express'),
  userRouter = require('./routes/secure/users'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
  openRoutes = require('./routes/open');
fileUpload = require('express-fileupload');

const app = express();

//Middleware
app.use(express.json());

//Unauthenticated routes
app.use(openRoutes);
app.use(cookieParser());

//
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

//  Authenticated  Routes
app.use(userRouter);

if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
