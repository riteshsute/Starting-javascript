const express = require('express');

const path = require('path');

const fs = require('fs');

const router = express.Router();

const contactController = require('../controllersForChatApp/contactControl');

// const rootDir = require('../util/path')

router.get('/contact', contactController.getContactDetails);

router.post('/contact', contactController.postContactDetails);


module.exports = router;