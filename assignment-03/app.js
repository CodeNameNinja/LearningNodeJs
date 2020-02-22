const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const rootDir = require('./util/path');

const createUserRoutes = require('./routes/create-users');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(createUserRoutes);
app.use(usersRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Error Page 404 </h1>')
})

app.listen(3000);