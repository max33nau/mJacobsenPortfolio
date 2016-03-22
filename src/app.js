const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join( __dirname, 'src/public' );
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors()); // Cross Origin Resource Sharing: allows restricted resources on a web page to
// be requested from another domain
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use( express.static( publicPath ) );

app.use(function(err, req, res, next) {
  res.status(500).send(err);
});
app.use(function(req, res, next) {
  res.status(404).send('404, no page found: ' + req.url);
});


module.exports = app;
