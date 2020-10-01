const express = require('express');
const router = express.Router();

//setting homeController to use in routes
const homeController = require('../controllers/home_controller');

console.log('routes loaded');



//assigning controller to the home
router.get('/', homeController.home);
router.use('/create-task',require('./createTask'));
router.use('/delete-task', require('./deleteTask'));

//Exporting Routes
module.exports = router;