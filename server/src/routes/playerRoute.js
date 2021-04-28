const express = require('express');
const router = express.Router();

const controller = require('../controllers/playerController');

router.get("/players", controller.index);
router.post("/players", controller.store);

module.exports = router;
