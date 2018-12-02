// Get access to the database connection
const mongoose = require('mongoose');

const captainModel = mongoose.model('Captain');

const itemList = function (req, res) {
    captainModel.find({}, function(err, captains){
        if (err){
            res
                .status(404)
                .json(err);
        }
        else{
            res
                .status(200)
                .json(captains);
        }
    });};

const addItem = function (req, res) {
    captainModel.create(req.body, function(err, newCaptain){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newCaptain);
            }
        }
    );
};

module.exports = {
    itemList,
    addItem
};