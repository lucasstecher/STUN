const express = require('express');
const router = express.Router();

const controller = require('../controllers/heroController');

router.get("/heroesCards", controller.index);
router.post("/heroesCards", controller.store);

module.exports = router;