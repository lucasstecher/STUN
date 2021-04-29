const express = require('express');
const router = express.Router();

const controller = require('../controllers/narutoController');

router.get("/narutoCards", controller.index);
router.post("/narutoCards", controller.store);
router.delete("/narutoCards/:id", controller.destroy);
router.put("/narutoCards/:id", controller.update);

module.exports = router;
