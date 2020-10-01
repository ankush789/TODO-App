const express = require("express");
const router = express.Router();
const deleteTaskControllers = require('../controllers/deleteTaskControllers');

router.post("", deleteTaskControllers.deleteTask);

module.exports = router;