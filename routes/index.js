const express = require('express');
const router = express.Router();

//setting homeController to use in routes
const homeController = require('../controllers/home_controller');

console.log('routes loaded');

//assigning controller to the home
router.get('/', homeController.home);
//Exporting Routes
module.exports = router;