const express = require('express');
const router = express.Router();

const produtos = [];

router.get('/add-produto', (req,res) => {
	res.render('admin', {pageTitle: 'admin'})
})

router.post('/produto-enviado' , (req,res) => {
	produtos.push(req.body.titulo);
	res.redirect('/');
})

exports.produtos = produtos;
exports.router = router;
