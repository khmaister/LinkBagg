// Dependencies
const express = require('express');

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });