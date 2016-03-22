require('dotenv').config();
const mongoose = require( 'mongoose' );
const app = require('./app');
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'development') {
  console.log('The process env variables: ', process.env);
}

/**** Connect app to the server ****/
mainApp = {};
mainApp.start = function(callback) {
  var server = app.listen(process.env.PORT, function () {
    console.log(`Listening on port ${process.env.PORT}...`);
    callback();
  });
  return {
    close: function close(callback) {
      server.close(function () {
        console.log('server disconnected');
        callback();
      });
    }
  };
}

mainApp.app = app;
module.exports = mainApp;

mainApp.start(function(){
  console.log('app is running');
})
