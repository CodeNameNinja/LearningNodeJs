const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views'); //default setting, but here as an e.i
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views','page-not-found.html'))
})

app.listen(3000);
