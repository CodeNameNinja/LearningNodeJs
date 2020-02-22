const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/create-user', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','create-users.html'));
});

router.post('/create-user', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
})

module.exports = router;