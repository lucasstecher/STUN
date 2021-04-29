const express = require('express');
const router = express.Router();

const controller = require('../controllers/heroController');

router.get("/heroesCards", controller.index);

module.exports = router;