const express = require('express');
const router = express.Router();
const coridoorController = require("../../controllers/coridoor");


router.get('/api/bms/coridoor', coridoorController.getCoridoorData);

module.exports = router;
