const express = require('express');
const path = require('path');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('create-users',{
        pageTitle: "Create a User"
    })
})
router.post('/', (req, res, next) => {
    users.push({username: req.body.username});
    res.redirect('/users');
})

exports.routes = router
exports.users = users;