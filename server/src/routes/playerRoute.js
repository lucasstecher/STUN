const express = require('express');
const router = express.Router();

const controller = require('../controllers/playerController');

router.get("/players", controller.index);
router.post("/players", controller.store);
router.delete("/players/:id", controller.destroy);
router.put("/players/:id", controller.update);

module.exports = router;
