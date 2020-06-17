const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

//setting up Express
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

//Get request for landing page
app.get('/', (req, res) => {
  res.json(JSON.parse(response.body));
})

//if app is running on a deployed site use the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎 ==> Server now listening on PORT ${PORT}!`);
});
