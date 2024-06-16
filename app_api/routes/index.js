const express = require('express'); //express app
const router = express.Router(); //router logic

//This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//define route for our trips endpoint
router  
    .route('/trips')
    .get(tripsController.tripsList) //GET method routes tripslist
    .post(tripsController.tripsAddTrip); //POST method Adds a Trip

//GET methods routes tripsFindByCode - requires perameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);
    
module.exports = router;