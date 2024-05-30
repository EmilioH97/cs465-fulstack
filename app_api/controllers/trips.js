const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips');

// GET: trips -list all the trips
//regardless of outcome, response must include html status code
//and JSON message to the reaquesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) //no filter, return all records of querey
        .exec();

        //uncommit the following line to show results of querey
        // on the console
        //console.log(q)

    if(!q){
        //database returned no data
        return res  
                .status(404)
                .json(err);
    }
    else{
        //return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) //no filter, return all records of querey
        .exec();

        //uncommit the following line to show results of querey
        // on the console
        //console.log(q)

    if(!q){
        //database returned no data
        return res  
                .status(404)
                .json(err);
    }
    else{
        //return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};