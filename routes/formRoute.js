const express = require("express");
const formController = require("../controllers/formController");

const router = express.Router();

// Endpoint to handle form submission
router.post("/", formController.submitForm);

module.exports = router;
