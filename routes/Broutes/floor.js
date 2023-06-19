const express = require('express');
const router = express.Router();
const FloorController = require("../../controllers/floor");


router.get('/api/bms/floor', FloorController.getFloorData);

module.exports = router;
