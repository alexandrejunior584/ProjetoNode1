const express = require('express');
const router = express.Router();
const adminProduto = require('./admin');

router.get('/' , (req,res) => {
	const datas = adminProduto.produtos;
	res.render('shop', {pageTitle: 'shop', produtoDados: datas});
})


module.exports = router; 

