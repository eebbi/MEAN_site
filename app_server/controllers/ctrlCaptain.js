const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req, res) {
    res.render('captain_add');
};

const captainlist = function(req, res){

    const path = '/api/captain';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request(
        requestOptions,
        function (err, response, body){
            if (err){
                res.render('error', {message: err.message});
            }
            else if (response.statusCode !== 200){
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")" });
            }
            else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            }
            else if (!body.length){
                res.render('error', {message: 'No documents in collection'});
            }
            else {
                res.render('captain', {captains: body});
            }
        }
    );
};

const addData = function(req, res) {
    const path = '/api/captain';

    const postdata = {
        year: req.body.year,
        player: req.body.player
    };

    const requestOptions = {
        url : apiURL.server + path,
        method : 'POST',
        json : postdata
    };

    request(
        requestOptions,
        function (err, response){
            if (response.statusCode === 201) {
                res.redirect('/captain');
            } else {
                res.render('error', {message: 'Error adding data: ' + response.statusMessage });
            }
        }
    );
};

module.exports = {
    captainlist,
    showForm,
    addData
};