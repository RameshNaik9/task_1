const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// Route for getting countries
router.get('/countries', addressController.getCountries);

// Route for getting states by countryId
router.get('/:countryId/states', addressController.getStates);

// Route for getting cities by stateId
router.get('/:countryId/:stateId/cities', addressController.getCities);

module.exports = router;
