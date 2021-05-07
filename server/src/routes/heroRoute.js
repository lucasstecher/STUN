const express = require('express');
const router = express.Router();

const controller = require('../controllers/heroController');

router.get("/heroesCards", controller.index);
router.post("/heroesCards", controller.store);
router.put("/heroesCards/:id", controller.update);
router.delete("/heroesCards/:id", controller.destroy);

module.exports = router;