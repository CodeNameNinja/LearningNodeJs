const express = require('express');

const router = express.Router();

const path = require('path');
const userData = require('./create-user');
router.get('/users', (req, res, next) => {
    const users = userData.users;
    res.render('users', {users: users, pageTitle: "Users", });
}) 

module.exports = router;