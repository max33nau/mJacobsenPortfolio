require('dotenv').config();
const mongoose = require( 'mongoose' );
const app = require('./app');
mongoose.Promise = global.Promise;

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
