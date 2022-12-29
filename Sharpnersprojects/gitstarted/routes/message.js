const express = require('express');

const router = express.Router();

router.use('/message', (req, res, next) => {
    res.send('<h1> This is "Main" Page </h1>');
});

module.exports = router;