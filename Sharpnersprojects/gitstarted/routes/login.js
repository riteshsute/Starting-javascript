
const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send('<form action="/login" method="post"><input type="text" name="title"><button type="submit"> Login </form>');
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    res.redirect('/message'); 
})


module.exports = router;