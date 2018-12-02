const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const StandingSchema = new mongoose.Schema({year:String, team:String});
const CaptainSchema = new mongoose.Schema({year:String, player:String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later on
 */
mongoose.model('Standing', StandingSchema, 'Standing');
mongoose.model('Captain', CaptainSchema,'Captain');



