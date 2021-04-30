const express = require('express');
const router = express.Router();

const controller = require('../controllers/futebolController');

router.get("/futebolCards", controller.index);
router.post("/futebolCards", controller.store);
router.put("/futebolCards/:id", controller.update);
router.delete("/futebolCards/:id", controller.destroy);

module.exports = router;