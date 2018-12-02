const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlStanding = require('../controllers/ctrlStanding'); // ... for the list of World Cup winners (countries)
const ctrlCaptain = require('../controllers/ctrlCaptain'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/standing', ctrlStanding.standinglist);  // List of World Cup winners (countries)
router.get('/captain', ctrlCaptain.captainlist);  // List of Golden ball winners (players)

router
    .route('/standing/add')
    .get(ctrlStanding.showForm)
    .post(ctrlStanding.addData);

router
    .route('/captain/add')
    .get(ctrlCaptain.showForm)
    .post(ctrlCaptain.addData);

module.exports = router;
