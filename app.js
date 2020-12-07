const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const shop = require('./routes/shop');
const admin = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');
app.set('views' , 'views');
app.use(shop);
app.use('/admin',admin.router);



app.listen(3000 , () => console.log("Rodando"));
