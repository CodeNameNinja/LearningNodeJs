const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("This is the first Middleware");    
    next();
})
app.use('/users',(req, res, next) => {
    console.log("This is the user's page")
    res.send('<h1>This is the user\'s page</h1>');
})
app.use('/', (req, res, next) => {
    console.log("This is the first Middleware");    
    res.send('<h1>This is the home page</h1>');
})

app.listen(3000);