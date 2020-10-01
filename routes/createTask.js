const express = require('express');
const router = express.Router();

const createTaskController = require('../controllers/createTaskControllers');

router.post("", createTaskController.createTask);

module.exports = router;