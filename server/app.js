require('./db/config');
const  {podcast}  = require("./routes/secure/router");
var bodyParser = require('body-parser')
var cors = require('cors')
const express = require('express'),
  userRouter = require('./routes/secure/users'),
  passport = require('./middleware/authentication/'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  fileUpload = require('express-fileupload');

const app = express();

//Middleware
app.use(express.json());
app.use(cors())
//Unauthenticated routes
app.use(openRoutes);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(
//   passport.authenticate('jwt', {
//     session: true
//   })
// );

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images'
  })
);

//  Authenticated  Routes
app.use(userRouter);
app.use(podcast);
if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
