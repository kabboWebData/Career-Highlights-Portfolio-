const express = require('express');
const router = express.Router();

const { getContact } = require('../Controller/Mvc.controller');

router.post("/contact", getContact);

module.exports = router;