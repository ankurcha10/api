const express = require('express');
const router = express.Router();
const mainController = require("../../controllers/main");


router.get('/api/bms/main', mainController.getMainData);

module.exports = router;
