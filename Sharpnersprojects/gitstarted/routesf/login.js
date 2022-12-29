const express = require('express');

const path = require('path');

const fs = require('fs');

const router = express.Router();

// const rootDir = require('../util/path')

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    fs.writeFile("username.txt", `${req.body.username}:${req.body.message}`, ((err) => {
        err ? console.log("Something Went Wrong login") : res.redirect("/message")   
     }) )
})


module.exports = router;