// Get access to the database connection
const mongoose = require('mongoose');

const standingModel = mongoose.model('Standing');

const itemList = function (req, res) {

    standingModel.find({}, function(err, standings){
       if (err){
           res.status(404).json(err);
       }
       else{
           res.status(200).json(standings);
       }
    });
};

const addItem = function (req, res) {
    standingModel.create(req.body, function(err, newStanding){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newStanding);
            }
        }
    );
};


module.exports = {
    itemList,
    addItem
};



