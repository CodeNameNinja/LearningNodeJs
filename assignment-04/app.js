const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //default setting, but here as an e.i

const createUser = require('./routes/create-user');
const users = require('./routes/users');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(createUser.routes);
app.use(users);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "404 Page Not Found"});
})

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server is running on ${PORT}`);