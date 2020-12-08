const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const shop = require('./routes/shop');
const admin = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');
app.set('views' , 'views');
app.use(shop);
app.use('/admin',admin.router);
app.use(express.static(path.join(__dirname, 'public')))

app.use((req,res,next) => {
	res.status(404).render('error', {pageTitle: 'Página não encontrada!'})
});

app.listen(3000 , () => console.log("Rodando"));
