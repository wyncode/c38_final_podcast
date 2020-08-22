require('./db/config');
const express = require('express'),
  openRoutes = require('./routes/open'),
  app = express();
app.use(express.json());
app.use(openRoutes);
module.exports = app;

// const app = express();

// //Middleware
// app.use(express.json());

// // Unauthenticated routes
// app.use(openRoutes);

// // Serve any static files
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// // Any authentication middleware and related routing would be here.

// // Handle React routing, return all requests to React app
// if (process.env.NODE_ENV === 'production') {
//   app.get('*', (request, response) => {
//     response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }
// module.exports = app;
