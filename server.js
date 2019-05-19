const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

//Get request for my landing page
app.get('/', (req, res) => {
  res.json(JSON.parse(response.body));
})



//if app is running on a deployed site use the build folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// Start the API server
app.listen(PORT, function() {
    //tells you what port/localhost the app is running on
    console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
