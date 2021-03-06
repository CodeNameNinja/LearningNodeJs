const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const app = express();

app.engine('hbs',expressHbs({
   extname:'hbs',
   layoutsDir: 'views/layouts/', 
   defaultLayout: 'main-layout',
})); //defualt layout path btw
app.set('view engine', 'hbs');
app.set('views', 'views'); //default setting, but here as an e.i

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
   res.status(404).render('404', {docTitle: "404 Page Not Found"});
})

app.listen(3000);
