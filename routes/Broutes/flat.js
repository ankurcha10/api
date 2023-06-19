const express = require('express');
const router = express.Router();
const flatController = require("../../controllers/flat");


router.get('/api/bms/flat', flatController.getFlatData);

module.exports = router;
