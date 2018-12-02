const mongoose = require('mongoose');

const dbURI = 'mongodb://eebbi:jukurit1@ds121673.mlab.com:21673/mean_db';

mongoose.connect(dbURI);

// Printing a connection status message to the console
mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

/* This 'require' is needed here so we can expose the mongoose schemas defined
 * at appSchemas.js to the whole application, via require('./app_server/models/db') on 'app.js'
 */
require('./appSchemas');


