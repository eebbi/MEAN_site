const express = require('express');
const router = express.Router();

const ctrlApiCaptain = require('../controllers/ctrlApiCaptain');
const ctrlApiStanding = require('../controllers/ctrlApiStanding');

router
    .route('/captain')
    .get(ctrlApiCaptain.itemList)
    .post(ctrlApiCaptain.addItem);

router
    .route('/standing')
    .get(ctrlApiStanding.itemList)
    .post(ctrlApiStanding.addItem);

module.exports = router;


