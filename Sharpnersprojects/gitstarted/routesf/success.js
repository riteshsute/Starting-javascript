const express = require('express');

const path = require('path');

const fs = require('fs');

const successController = require('../controllersForChatApp/contactControl');

const router = express.Router();

router.get('/success', successController.getSuccessMessage);

router.post('/success', successController.postSuccessMessage); 

module.exports = router;