const express = require('express');
const router = express.Router();

const controller = require('../controllers/futebolController');

router.get("/futebolCards", controller.index);

module.exports = router;