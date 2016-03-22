const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const cors = require('cors');


/**** FavIcon ****/
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

/**** Cross Origin Resource Sharing ****/
app.use(cors()); // allows restricted resources on a web page to be requested from another domain
app.options('*', cors());

/**** Public ****/
var publicPath = path.join( __dirname, './public' );
app.use(express.static( publicPath, { redirect : false } ) );


/**** Parsing Data Requests For App ****/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**** Error Handling ****/
app.use(function(err, req, res, next) {
  res.status(500).send(err);
});
app.use(function(req, res, next) {
  res.status(404).send('404, no page found: ' + req.url);
});


module.exports = app;
